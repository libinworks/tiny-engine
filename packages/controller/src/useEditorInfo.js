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

// import { useHttp } from '@opentiny/tiny-engine-http'
// import useModal from './useModal'

// web版获取配置信息: 从url中获取
const _getWebData = () => {
  const paramsMap = new URLSearchParams(location.search)
  const id = paramsMap.get('id')
  const blockId = paramsMap.get('blockid')
  const pageId = paramsMap.get('pageid')
  const type = paramsMap.get('type')
  const version = paramsMap.get('version')

  return {
    type: type || 'app',
    id,
    pageId,
    blockId,
    version
  }
}

let userInfo = {}
const getUserInfo = () => {
  // 获取登录用户信息
  // useHttp()
  //   .get('/platform-center/api/user/me')
  //   .then((data) => {
  //     if (data) {
  //       userInfo = data
  //     }
  //   })
  //   .catch((error) => {
  //     useModal().message({ message: error.message, status: 'error' })
  //   })
  // libin
  userInfo = {
    "id": 86,
    "username": "开发者",
    "email": "developer@lowcode.com",
    "provider": null,
    "password": null,
    "resetPasswordToken": "developer",
    "confirmationToken": "uuid~dfafasdfasdfa",
    "confirmed": true,
    "blocked": null,
    "role": null,
    "created_by": null,
    "updated_by": null,
    "created_at": "2021-11-11T13:52:21.000Z",
    "updated_at": "2022-11-01T01:39:30.000Z",
    "block": null,
    "is_admin": true,
    "is_public": null,
    "tenant": {
        "id": "1"
    },
    "auths": [
        {
            "id": 265,
            "unit": {
                "type": "tenant",
                "id": 1,
                "name": "public"
            },
            "auth_type": null,
            "expired_time": null,
            "role": {
                "name": "Tinybuilder_Tenant_Admin",
                "id": 6,
                "description": "组织管理员"
            }
        }
    ],
    "tenants": [
        {
            "id": 1,
            "tenant_id": "public",
            "name_cn": "公共租户",
            "name_en": "Public Tenant",
            "description": "Default tenant for new user to explore.",
            "created_by": null,
            "updated_by": null,
            "created_at": "2021-12-28T11:39:10.000Z",
            "updated_at": "2023-02-09T08:23:00.000Z",
            "createdBy": null,
            "updatedBy": 86
        }
    ]
  }
}

const isAdmin = () => userInfo.resetPasswordToken === 'p_webcenter'
/**
 * 1、是否是VSCode插件: 通过是否有全局变量window.vscodeBridge判断
 *
 * 2、vscode中类型和id
 *   window.vscodeInjectData
 *      type: app 应用管理  block 区块管理
 *      id: 应用id/blockid
 *      ...其他详细信息
 *
 * 3、web版中，通过url参数判断
 *      type: app 应用管理  block 区块管理
 *      id: 应用id/blockid
 *
 */
export default () => {
  return {
    useInfo: _getWebData,
    getUserInfo,
    userInfo,
    isAdmin
  }
}
