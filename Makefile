VERSION=1.0.0
GO_SOURCE_DIR=${HOME}/Workspace/go/dpanel
JS_SROUCE_DIR=${HOME}/Workspace/js/d-panel
TARGET_DIR=${HOME}/Workspace/docker/dpanel/src

help:
	@echo "make build r1 r2 push VERSION="
	@echo "make test VERSION="
	@echo "make clean"

test: build
	docker buildx build -t ccr.ccs.tencentyun.com/dpanel/dpanel:test \
	--platform linux/arm64,linux/amd64 \
	--build-arg APP_VERSION=${VERSION} \
	. --push
r1:
	docker buildx build -t dpanel/dpanel:latest \
	--platform linux/arm64,linux/amd64 \
	--build-arg APP_VERSION=${VERSION} \
	. --push
r2:
	docker buildx build -t ccr.ccs.tencentyun.com/dpanel/dpanel:latest \
	--platform linux/arm64,linux/amd64 \
	--build-arg APP_VERSION=${VERSION} \
	. --push
	
push:
	git add . && git commit -a -m "update"
	git push

build: clean-source
	cd ${GO_SOURCE_DIR} && make GO_TARGET_DIR=${TARGET_DIR}/server linux arm
	cd ${JS_SROUCE_DIR} && npm run build && cp -r ${JS_SROUCE_DIR}/dist/* ${TARGET_DIR}/html

clean-source:
	rm -rf ${TARGET_DIR}/html && mkdir -p ${TARGET_DIR}/html

clean:
	docker buildx prune -a -f
	docker stop buildx_buildkit_dpanel-builder0 && docker rm /buildx_buildkit_dpanel-builder0