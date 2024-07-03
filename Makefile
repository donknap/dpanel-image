ARCH=amd64
VERSION=1.0.0
GO_SOURCE_DIR=${HOME}/Workspace/go/dpanel
JS_SROUCE_DIR=${HOME}/Workspace/js/d-panel
TARGET_DIR=${HOME}/Workspace/docker/dpanel/src

test: build-source
	docker buildx build -t ccr.ccs.tencentyun.com/dpanel/dpanel:test \
	--platform linux/${ARCH} \
	--build-arg APP_VERSION=${VERSION} \
	. --push
push: build-source
	git add . && git commit -a -m "update"
	git push
build-source: clean
	cd ${GO_SOURCE_DIR} && make GO_TARGET_DIR=${TARGET_DIR}/server linux arm
	cd ${JS_SROUCE_DIR} && npm run build && cp -r ${JS_SROUCE_DIR}/dist/* ${TARGET_DIR}/html

clean:
	rm -rf ${TARGET_DIR}/html && mkdir -p ${TARGET_DIR}/html