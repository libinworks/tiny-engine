/**
 * Copyright (c) 2023 - present TinyEngine Authors.
 * Copyright (c) 2023 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */

import { reactive, watch } from 'vue'
import { useHttp } from '@opentiny/tiny-engine-http'

const http = useHttp()

const defaultState = {
  // 应用列表
  list: [],
  // 当前选中的应用
  selectedApp: {
    id: '',
    name: '',
    app_desc: '',
    app_website: '',
    obs_url: null,
    published_at: '',
    created_at: '',
    updated_at: '',
    platform: '',
    state: null,
    published: false,
    tenant: null,
    editor_url: ''
  },
  // 当前选中的appId
  selectedId: ''
}

const appInfoState = reactive({ ...defaultState })

// 获取当前应用的信息
const fetchAppInfo = () => {
  // libin
// const fetchAppInfo = (appId) => {
  // return http.get(`/app-center/api/apps/detail/${appId}`)
  return Promise.resolve({
    "id": 918,
    "name": "portal-app",
    "app_website": null,
    "platform": {
        "id": 897,
        "name": "portal-platform"
    },
    "obs_url": "",
    "created_by": null,
    "updated_by": null,
    "created_at": "2022-06-08T07:19:01.000Z",
    "updated_at": "2023-09-04T08:55:40.000Z",
    "state": null,
    "published": false,
    "createdBy": 86,
    "updatedBy": 564,
    "tenant": 1,
    "home_page": "NTJ4MjvqoVj8OVsc",
    "css": null,
    "config": {},
    "git_group": "",
    "project_name": "",
    "constants": null,
    "data_handler": {
        "type": "JSFunction",
        "value": "function dataHanlder(res){\n return res;\n}"
    },
    "description": "demo应用",
    "latest": 22,
    "platform_history": null,
    "editor_url": "",
    "branch": "develop",
    "visit_url": null,
    "is_demo": null,
    "image_url": "",
    "is_default": true,
    "template_type": null,
    "set_template_time": null,
    "set_template_by": null,
    "set_default_by": 169,
    "framework": "Vue",
    "global_state": [],
    "default_lang": null,
    "extend_config": {
        "business": {
            "serviceName": "",
            "endpointName": "cce",
            "endpointId": "ee",
            "serviceId": "ee",
            "router": "ee"
        },
        "env": {
            "alpha": {
                "regions": [
                    {
                        "name": "",
                        "baseUrl": "",
                        "isDefault": false
                    }
                ],
                "isDefault": true
            }
        },
        "type": "console"
    },
    "assets_url": "",
    "data_hash": "ae128e37f6bc378f1b9c21d75bd05551",
    "can_associate": true,
    "data_source_global": {
        "dataHandler": {
            "type": "JSFunction",
            "value": "function dataHanlder(res){\n return res;\n}"
        }
    }
  })
}

watch(
  () => appInfoState.selectedId,
  (id) => {
    fetchAppInfo(id).then((app) => {
      appInfoState.selectedApp = app
      // 监听应用 ID 变化，根据应用名称设置网页 title
      document.title = `${app.name} —— TinyEditor 前端可视化设计器`
    })
  }
)

// 获取应用列表
const fetchAppList = (platformId) => http.get(`/app-center/api/apps/list/${platformId}`)

const updateApp = async (id) => {
  const appInfo = await fetchAppInfo(id)
  appInfoState.selectedApp = appInfo
  appInfoState.selectedId = appInfo.id
}

export default () => {
  return {
    appInfoState,
    fetchAppInfo,
    fetchAppList,
    updateApp
  }
}
