const Data = {
  "meta": {
      "name": "portal-app",
      "tenant": 1,
      "git_group": "",
      "project_name": "",
      "description": "demo应用",
      "branch": "develop",
      "is_demo": null,
      "global_state": [],
      "appId": "918",
      "creator": "",
      "gmt_create": "2022-06-08 03:19:01",
      "gmt_modified": "2023-08-23 10:22:28"
  },
  "dataSource": {
      "list": [],
      "dataHandler": {
          "type": "JSFunction",
          "value": "function dataHanlder(res){\n return res;\n}"
      }
  },
  "i18n": {
      "zh_CN": {
          "lowcode.cca8d0ea": "应用",
          "lowcode.c257d5e8": "查询",
          "lowcode.61c8ac8c": "地方",
          "lowcode.f53187a0": "测试",
          "lowcode.97ad00dd": "创建物料资产包",
          "lowcode.61dcef52": "terterere",
          "lowcode.45f4c42a": "gdfgdf",
          "lowcode.c6f5a652": "fsdaf",
          "lowcode.34923432": "fdsafdsa",
          "lowcode.48521e45": "fdsfds",
          "lowcode.6534943e": "fdsafds",
          "lowcode.44252642": "fdsafds",
          "lowcode.2a743651": "sda",
          "lowcode.24315357": "fdsafds",
          "lowcode.44621691": "fdsafsd",
          "lowcode.65636226": "fdsaf",
          "lowcode.6426a4e2": "sd",
          "lowcode.e41c6636": "aa",
          "lowcode.51c23164": "aa",
          "lowcode.17245b46": "aa",
          "lowcode.4573143c": "aa",
          "lowcode.56432442": "aa",
          "lowcode.33566643": "aa",
          "lowcode.565128f3": "aa",
          "lowcode.56643835": "aa",
          "lowcode.33311134": "aa",
          "lowcode.44326643": "aa",
          "lowcode.36223242": "aa"
      },
      "en_US": {
          "lowcode.cca8d0ea": "app",
          "lowcode.c257d5e8": "search",
          "lowcode.61c8ac8c": "dsdsa",
          "lowcode.f53187a0": "test",
          "lowcode.97ad00dd": "createMaterial",
          "lowcode.61dcef52": "sadasda",
          "lowcode.45f4c42a": "gfdgfd",
          "lowcode.c6f5a652": "fsdafds",
          "lowcode.34923432": "fdsafds",
          "lowcode.6534943e": "fdsafdsa",
          "lowcode.44252642": "aaaa",
          "lowcode.2a743651": "fdsaf",
          "lowcode.24315357": "fsdafds",
          "lowcode.44621691": "sd",
          "lowcode.65636226": "fdsfsd",
          "lowcode.6426a4e2": "fdsafsd",
          "lowcode.e41c6636": "aa",
          "lowcode.51c23164": "aa",
          "lowcode.17245b46": "aa",
          "lowcode.4573143c": "a",
          "lowcode.56432442": "aa",
          "lowcode.33566643": "aa",
          "lowcode.565128f3": "aa",
          "lowcode.56643835": "aa",
          "lowcode.33311134": "aa",
          "lowcode.44326643": "aa",
          "lowcode.36223242": "aa"
      }
  },
  "componentsTree": [
    {
      "state": {
        "dataDisk": [
          1,
          2,
          3
        ]
      },
      "methods": {
        createVm: {
          type: 'JSFunction',
          value: `(function createVm() {
            const emptyKey = ['arrivalStation', 'mblNumber', 'pieceNum']
          
            const fontSizeMap = {
              all: [{ contentLen: 300, size: 10 }],
          
              'productContentCn,productContentEn': [
                { contentLen: 1100, size: 13 },
                { contentLen: 1200, size: 10 }
              ],
          
              'dangerInfoCn,dangerInfoEn': [{ contentLen: 1000, size: 10 }],
          
              'storageCn,storageEn': [{ contentLen: 500, size: 10 }]
            }
          
            return {
              emptyKey,
              fontSizeMap
            }
          })()`
        }
      },
      "componentName": "Page",
      "css": "body {\n  font-size: 14px;\n  box-sizing: border-box;\n  font-family: SimSun;\n}\ntable {\n  width: 100%;\n  font-size: 16px;\n  table-layout: fixed;\n  border: 1px solid black;\n  border-collapse: collapse;\n  box-sizing: border-box;\n}\ntd {\n  padding: 2px 4px;\n  height: 50px;\n  line-height: 1.3;\n  word-break: break-word;\n  border: 1px solid black;\n  box-sizing: border-box;\n}\n.page-des {\n  font-size: 16px;\n}\n.table-first-tr {\n  height: 0;\n  font-size: 0;\n  overflow: hidden;\n}\n.table-first-tr td {\n  height: 0;\n  border: 0;\n  padding: 0;\n}\n\n.text-min-height {\n  min-height: 20px;\n}\n\n.table-title {\n  font-size: 15px;\n  text-align: center;\n}\n\n.font-size10 {\n  font-size: 10px;\n}\n.font-size11 {\n  font-size: 11px;\n}\n.font-size12 {\n  font-size: 12px;\n}\n.font-size13 {\n  font-size: 13px;\n}\n.font-size14 {\n  font-size: 14px;\n}\n.font-size15 {\n  font-size: 15px;\n}\n.font-size16 {\n  font-size: 16px;\n}\n",
      "props": {},
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "padding-top: 60px; padding-bottom: 0px; padding-left: 44px; padding-right: 44px; background-color: #fff;"
          },
          "id": "30c94cc8",
          "children": [
            {
              "componentName": "div",
              "props": {
                "style": "height: 90px; display: block; justify-content: flex-end; text-align: right;"
              },
              "id": "969932c5",
              "children": [
                {
                  "componentName": "Img",
                  "props": {
                    "style": "width: 200px; height: 90px;"
                  },
                  "id": "34325435"
                }
              ]
            },
            {
              "componentName": "div",
              "props": {
                "style": "margin-top: 45px; display: block; text-align: right;",
                "className": "page-des"
              },
              "children": [
                {
                  "componentName": "Text",
                  "props": {
                    "text": "page 1 of 3 pages"
                  },
                  "id": "51324663"
                }
              ],
              "id": "cf354c52"
            },
            {
              "componentName": "div",
              "props": {},
              "id": "25e24232",
              "children": [
                {
                  "componentName": "div",
                  "props": {
                    "style": "margin-top: 80px; text-align: center; font-size: 34px; font-weight: 500; line-height: 1.2; font-family: 'Source Han Sans CN';"
                  },
                  "children": [
                    {
                      "componentName": "Text",
                      "props": {
                        "text": "航"
                      },
                      "id": "f5265496"
                    },
                    {
                      "componentName": "Text",
                      "props": {
                        "text": "空",
                        "style": "margin-left: 7.5px;"
                      },
                      "id": "9384536e"
                    },
                    {
                      "componentName": "Text",
                      "props": {
                        "text": "运",
                        "style": "margin-left: 7.5px;"
                      },
                      "id": "62353552"
                    },
                    {
                      "componentName": "Text",
                      "props": {
                        "text": "输",
                        "style": "margin-left: 7.5px;"
                      },
                      "id": "16232633"
                    },
                    {
                      "componentName": "Text",
                      "props": {
                        "text": "危",
                        "style": "margin-left: 7.5px;"
                      },
                      "id": "312f3956"
                    },
                    {
                      "componentName": "Text",
                      "props": {
                        "text": "险",
                        "style": "margin-left: 7.5px;"
                      },
                      "id": "33629c34"
                    },
                    {
                      "componentName": "Text",
                      "props": {
                        "text": "性",
                        "style": "margin-left: 7.5px;"
                      },
                      "id": "2585d353"
                    },
                    {
                      "componentName": "Text",
                      "props": {
                        "text": "识",
                        "style": "margin-left: 7.5px;"
                      },
                      "id": "25323481"
                    },
                    {
                      "componentName": "Text",
                      "props": {
                        "text": "别",
                        "style": "margin-left: 7.5px;"
                      },
                      "id": "33284563"
                    },
                    {
                      "componentName": "Text",
                      "props": {
                        "text": "报",
                        "style": "margin-left: 7.5px;"
                      },
                      "id": "52323566"
                    },
                    {
                      "componentName": "Text",
                      "props": {
                        "text": "告",
                        "style": "margin-left: 7.5px;"
                      },
                      "id": "e6643426"
                    },
                    {
                      "componentName": "Text",
                      "props": {
                        "text": "书",
                        "style": "margin-left: 7.5px;"
                      },
                      "id": "31343932"
                    }
                  ],
                  "id": "35457323"
                },
                {
                  "componentName": "div",
                  "props": {
                    "style": "text-align: center; margin-top: 2px; font-size: 23.5px; font-weight: 450; line-height: 1.2; font-family: SimHei;"
                  },
                  "children": [
                    {
                      "componentName": "Text",
                      "props": {
                        "text": "Hazard Identification Report for Air Trasport"
                      },
                      "id": "45394594"
                    }
                  ],
                  "id": "34446134"
                }
              ]
            },
            {
              "componentName": "div",
              "props": {
                "style": "height: 70px; margin-top: 40px; padding-left: 100px;"
              },
              "id": "5553b545",
              "children": [
                {
                  "componentName": "Img",
                  "props": {
                    "src": "${backQrCode}",
                    "style": "height: 70px;"
                  },
                  "id": "453a4553"
                }
              ]
            },
            {
              "componentName": "div",
              "props": {
                "style": "display: block; margin-top: 20px; padding-left: 100px; padding-right: 20px; overflow: hidden;"
              },
              "children": [
                {
                  "componentName": "div",
                  "props": {
                    "style": "width: 145px; float: left;"
                  },
                  "children": [
                    {
                      "componentName": "Text",
                      "props": {
                        "style": "margin-right: 3px;",
                        "text": "证"
                      },
                      "id": "6554343c"
                    },
                    {
                      "componentName": "Text",
                      "props": {
                        "style": "margin-right: 3px;",
                        "text": "书"
                      },
                      "id": "5c5432c2"
                    },
                    {
                      "componentName": "Text",
                      "props": {
                        "style": "margin-right: 3px;",
                        "text": "编"
                      },
                      "id": "51b65376"
                    },
                    {
                      "componentName": "Text",
                      "props": {
                        "style": "margin-right: 3px;",
                        "text": "号"
                      },
                      "id": "2b456f24"
                    },
                    {
                      "componentName": "Text",
                      "props": {
                        "style": "margin-right: 3px;",
                        "text": "："
                      },
                      "id": "34451542"
                    }
                  ],
                  "id": "555a65a8"
                },
                {
                  "componentName": "div",
                  "props": {
                    "style": "width: 370px; float: left;"
                  },
                  "children": [
                    {
                      "componentName": "Text",
                      "props": {
                        "className": "text-min-height",
                        "style": "display: block;",
                        "text": "${backIdentifyCode}"
                      },
                      "id": "44534e56"
                    }
                  ],
                  "id": "33247354"
                }
              ],
              "id": "7b5554cc"
            },
            {
              "componentName": "div",
              "props": {
                "style": "display: block; margin-top: 16px; padding-left: 100px; padding-right: 20px; overflow: hidden;"
              },
              "children": [
                {
                  "componentName": "div",
                  "props": {
                    "style": "width: 145px; float: left;"
                  },
                  "children": [
                    {
                      "componentName": "Text",
                      "props": {
                        "style": "margin-right: 3px;",
                        "text": "名"
                      },
                      "id": "32644d21"
                    },
                    {
                      "componentName": "Text",
                      "props": {
                        "style": "margin-right: 3px;",
                        "text": "称"
                      },
                      "id": "545f5444"
                    },
                    {
                      "componentName": "Text",
                      "props": {
                        "style": "margin-right: 3px;",
                        "text": "："
                      },
                      "id": "74454421"
                    }
                  ],
                  "id": "3736c266"
                },
                {
                  "componentName": "div",
                  "props": {
                    "style": "width: 370px; float: left;"
                  },
                  "children": [
                    {
                      "componentName": "Text",
                      "props": {
                        "className": "text-min-height",
                        "style": "display: block;",
                        "text": "见品名附加页-${identifyCode}"
                      },
                      "id": "52431263"
                    }
                  ],
                  "id": "635a5425"
                }
              ],
              "id": "5a5643f1"
            },
            {
              "componentName": "div",
              "props": {
                "style": "display: block; margin-top: 16px; padding-left: 100px; padding-right: 20px; overflow: hidden;"
              },
              "children": [
                {
                  "componentName": "div",
                  "props": {
                    "style": "width: 145px; float: left;"
                  },
                  "children": [
                    {
                      "componentName": "Text",
                      "props": {
                        "style": "margin-right: 3px;",
                        "text": "Name："
                      },
                      "id": "62a52933"
                    }
                  ],
                  "id": "561a2635"
                },
                {
                  "componentName": "div",
                  "props": {
                    "style": "width: 370px; float: left;"
                  },
                  "children": [
                    {
                      "componentName": "Text",
                      "props": {
                        "className": "text-min-height",
                        "style": "display: block;",
                        "text": "See Name of Goods Attachment-${identifyCode}"
                      },
                      "id": "4636b224"
                    }
                  ],
                  "id": "56143532"
                }
              ],
              "id": "a5aa2426"
            },
            {
              "componentName": "div",
              "props": {
                "style": "display: block; margin-top: 16px; padding-left: 100px; padding-right: 20px; overflow: hidden;"
              },
              "children": [
                {
                  "componentName": "div",
                  "props": {
                    "style": "width: 145px; float: left;"
                  },
                  "children": [
                    {
                      "componentName": "Text",
                      "props": {
                        "style": "margin-right: 3px;",
                        "text": "生"
                      },
                      "id": "64235154"
                    },
                    {
                      "componentName": "Text",
                      "props": {
                        "style": "margin-right: 3px;",
                        "text": "效"
                      },
                      "id": "464117ec"
                    },
                    {
                      "componentName": "Text",
                      "props": {
                        "style": "margin-right: 3px;",
                        "text": "日"
                      },
                      "id": "54655644"
                    },
                    {
                      "componentName": "Text",
                      "props": {
                        "style": "margin-right: 3px;",
                        "text": "期"
                      },
                      "id": "33685553"
                    },
                    {
                      "componentName": "Text",
                      "props": {
                        "style": "margin-right: 3px;",
                        "text": "："
                      },
                      "id": "21224653"
                    }
                  ],
                  "id": "265416e2"
                },
                {
                  "componentName": "div",
                  "props": {
                    "style": "width: 370px; float: left;"
                  },
                  "children": [
                    {
                      "componentName": "Text",
                      "props": {
                        "style": "display: block;",
                        "className": "text-min-height",
                        "text": "${printTime}"
                      },
                      "id": "5664b324"
                    }
                  ],
                  "id": "65c63763"
                }
              ],
              "id": "a2356553"
            },
            {
              "componentName": "div",
              "props": {
                "style": "display: block; margin-top: 16px; padding-left: 100px; padding-right: 20px; overflow: hidden;"
              },
              "children": [
                {
                  "componentName": "div",
                  "props": {
                    "style": "width: 145px; float: left;"
                  },
                  "children": [
                    {
                      "componentName": "Text",
                      "props": {
                        "style": "margin-right: 3px;",
                        "text": "委"
                      },
                      "id": "85434555"
                    },
                    {
                      "componentName": "Text",
                      "props": {
                        "style": "margin-right: 3px;",
                        "text": "托"
                      },
                      "id": "35454512"
                    },
                    {
                      "componentName": "Text",
                      "props": {
                        "style": "margin-right: 3px;",
                        "text": "单"
                      },
                      "id": "e63a4483"
                    },
                    {
                      "componentName": "Text",
                      "props": {
                        "style": "margin-right: 3px;",
                        "text": "位"
                      },
                      "id": "53654d36"
                    },
                    {
                      "componentName": "Text",
                      "props": {
                        "style": "margin-right: 3px;",
                        "text": "："
                      },
                      "id": "46561b36"
                    }
                  ],
                  "id": "13646f45"
                },
                {
                  "componentName": "div",
                  "props": {
                    "style": "width: 370px; float: left;"
                  },
                  "children": [
                    {
                      "componentName": "Text",
                      "props": {
                        "className": "text-min-height",
                        "style": "display: block;",
                        "text": "${entrustCoopName}"
                      },
                      "id": "44543232"
                    }
                  ],
                  "id": "2f632b63"
                }
              ],
              "id": "46544561"
            },
            {
              "componentName": "div",
              "props": {
                "style": "display: block; margin-top: 16px; padding-left: 100px; padding-right: 20px; overflow: hidden;"
              },
              "children": [
                {
                  "componentName": "div",
                  "props": {
                    "style": "width: 145px; float: left;"
                  },
                  "children": [
                    {
                      "componentName": "Text",
                      "props": {
                        "style": "margin-right: 3px;",
                        "text": "Applicant："
                      },
                      "id": "54365263"
                    }
                  ],
                  "id": "54355346"
                },
                {
                  "componentName": "div",
                  "props": {
                    "style": "width: 370px; float: left;"
                  },
                  "children": [
                    {
                      "componentName": "Text",
                      "props": {
                        "className": "text-min-height",
                        "style": "display: block;",
                        "text": "${entrustCoopEname}"
                      },
                      "id": "54441e36"
                    }
                  ],
                  "id": "663f63d4"
                }
              ],
              "id": "e2453268"
            }
          ]
        },
        {
          "componentName": "hr",
          "props": {},
          "id": "c63a4a16"
        },
        {
          "componentName": "div",
          "props": {
            "style": "padding-top: 46px; padding-bottom: 0px; padding-left: 44px; padding-right: 44px; background-color: #fff;"
          },
          "children": [
            {
              "componentName": "Text",
              "props": {
                "text": "航空运输危险性识别报告书",
                "style": "display: block; text-align: center; font-size: 29px;"
              },
              "id": "3c226d65"
            },
            {
              "componentName": "div",
              "props": {
                "style": "margin-top: 20px; display: block; text-align: right;",
                "className": "page-des"
              },
              "children": [
                {
                  "componentName": "Text",
                  "props": {
                    "text": "page 2 of 3 pages"
                  },
                  "id": "46536353"
                }
              ],
              "id": "42143646"
            },
            {
              "componentName": "table",
              "props": {
                "border": "1",
                "style": "width: 100%; table-layout: fixed; border: 1px solid black; border-collapse: collapse; margin-top: 12px;"
              },
              "children": [
                {
                  "componentName": "tr",
                  "children": [
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "text": "eg",
                            "style": "display: block;"
                          },
                          "id": "44c1c625"
                        }
                      ],
                      "id": "25246642",
                      "props": {
                        "style": "width: 90px;"
                      }
                    },
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "text": "eg",
                            "style": "display: block;"
                          },
                          "id": "6346644f"
                        }
                      ],
                      "props": {
                        "style": "width: 90px;"
                      },
                      "id": "444b2f51"
                    },
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "text": "eg",
                            "style": "display: block;"
                          },
                          "id": "64634433"
                        }
                      ],
                      "props": {},
                      "id": "42223515"
                    },
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "text": "eg",
                            "style": "display: block;"
                          },
                          "id": "59b94453"
                        }
                      ],
                      "props": {
                        "style": "width: 150px;"
                      },
                      "id": "22263336"
                    },
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "text": "eg",
                            "style": "display: block;"
                          },
                          "id": "623515d8"
                        }
                      ],
                      "props": {},
                      "id": "c24d3126"
                    }
                  ],
                  "props": {
                    "style": "border-collapse: collapse; word-break: break-word; overflow-wrap: break-word; table-layout: fixed;",
                    "className": "table-first-tr"
                  },
                  "id": "64664452"
                },
                {
                  "componentName": "tr",
                  "children": [
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "text": "委托编号",
                            "className": "text-min-height"
                          },
                          "id": "3a366164"
                        },
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "text": "Application No.",
                            "className": "text-min-height"
                          },
                          "id": "23253f6d"
                        }
                      ],
                      "id": "25862731",
                      "props": {
                        "colspan": 2,
                        "style": "text-align: center;",
                        "className": "table-title"
                      }
                    },
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "${identifyCode}"
                          },
                          "id": "e1631345"
                        }
                      ],
                      "props": {},
                      "id": "6cb5235a"
                    },
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "text": "检验目的",
                            "className": "text-min-height"
                          },
                          "id": "64144533"
                        },
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "text": "Inspection",
                            "className": "text-min-height"
                          },
                          "id": "42445552"
                        },
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "text": "Purpose",
                            "className": "text-min-height"
                          },
                          "id": "43422432"
                        }
                      ],
                      "props": {
                        "style": "text-align: center;",
                        "className": "table-title"
                      },
                      "id": "2425d455"
                    },
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "航空运输危险性识别"
                          },
                          "id": "64146263"
                        }
                      ],
                      "props": {},
                      "id": "24d22546"
                    }
                  ],
                  "props": {
                    "style": "border-collapse: collapse; word-break: break-word; overflow-wrap: break-word; table-layout: fixed;"
                  },
                  "id": "3312d342"
                },
                {
                  "componentName": "tr",
                  "children": [
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "text": "名称",
                            "className": "text-min-height"
                          },
                          "id": "32615211"
                        },
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "text": "Name",
                            "className": "text-min-height"
                          },
                          "id": "64411321"
                        }
                      ],
                      "id": "23262262",
                      "props": {
                        "style": "text-align: center;",
                        "rowspan": 2,
                        "className": "table-title"
                      }
                    },
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "text": "中文",
                            "className": "text-min-height"
                          },
                          "id": "53e13345"
                        },
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "text": "Chinese",
                            "className": "text-min-height"
                          },
                          "id": "5342213d"
                        }
                      ],
                      "props": {
                        "style": "text-align: center;",
                        "className": "table-title"
                      },
                      "id": "66561546"
                    },
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "${productNameCn}"
                          },
                          "id": "5644e326"
                        }
                      ],
                      "props": {
                        "colspan": 3
                      },
                      "id": "72433546"
                    }
                  ],
                  "props": {
                    "style": "border-collapse: collapse; word-break: break-word; overflow-wrap: break-word; table-layout: fixed; height: 88px;"
                  },
                  "id": "44272315"
                },
                {
                  "componentName": "tr",
                  "children": [
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "text": "英文",
                            "className": "text-min-height"
                          },
                          "id": "76713155"
                        },
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "text": "English",
                            "className": "text-min-height"
                          },
                          "id": "62244264"
                        }
                      ],
                      "props": {
                        "style": "text-align: center;",
                        "className": "table-title"
                      },
                      "id": "32f45632"
                    },
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "${productNameEn}"
                          },
                          "id": "5c764435"
                        }
                      ],
                      "props": {
                        "colspan": 3
                      },
                      "id": "46652a3c"
                    }
                  ],
                  "props": {
                    "style": "border-collapse: collapse; word-break: break-word; overflow-wrap: break-word; table-layout: fixed; height: 88px;"
                  },
                  "id": "54543495"
                },
                {
                  "componentName": "tr",
                  "children": [
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "生产厂商"
                          },
                          "id": "53426c53"
                        },
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "Manufacturer"
                          },
                          "id": "62434a34"
                        }
                      ],
                      "props": {
                        "style": "text-align: center;",
                        "colspan": 2,
                        "className": "table-title"
                      },
                      "id": "64233873"
                    },
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "${oemNameCn,oemNameEn}"
                          },
                          "id": "44324356"
                        }
                      ],
                      "props": {
                        "colspan": 3
                      },
                      "id": "52142b26"
                    }
                  ],
                  "props": {
                    "style": "border-collapse: collapse; word-break: break-word; overflow-wrap: break-word; table-layout: fixed;"
                  },
                  "id": "41341645"
                },
                {
                  "componentName": "tr",
                  "children": [
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "品牌/型号"
                          },
                          "id": "35431152"
                        },
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "Brand/Model"
                          },
                          "id": "53421362"
                        }
                      ],
                      "props": {
                        "style": "text-align: center;",
                        "colspan": 2,
                        "className": "table-title"
                      },
                      "id": "3628e246"
                    },
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "${brandNameCn,brandNameEn}"
                          },
                          "id": "66652212"
                        }
                      ],
                      "props": {
                        "colspan": 3
                      },
                      "id": "26568e33"
                    }
                  ],
                  "props": {
                    "style": "border-collapse: collapse; word-break: break-word; overflow-wrap: break-word; table-layout: fixed;"
                  },
                  "id": "56538cf1"
                },
                {
                  "componentName": "tr",
                  "children": [
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "分子式或结构式"
                          },
                          "id": "25444622"
                        },
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "Chemical Formula"
                          },
                          "id": "53262454"
                        }
                      ],
                      "props": {
                        "style": "text-align: center;",
                        "colspan": 2,
                        "className": "table-title"
                      },
                      "id": "11416263"
                    },
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "${formulation}"
                          },
                          "id": "4a51b249"
                        }
                      ],
                      "props": {
                        "colspan": 3
                      },
                      "id": "96522952"
                    }
                  ],
                  "props": {
                    "style": "border-collapse: collapse; word-break: break-word; overflow-wrap: break-word; table-layout: fixed;"
                  },
                  "id": "314a3533"
                },
                {
                  "componentName": "tr",
                  "children": [
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "组成或含量"
                          },
                          "id": "25641555"
                        },
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "Composition/Contents"
                          },
                          "id": "55142644"
                        }
                      ],
                      "props": {
                        "style": "text-align: center;",
                        "colspan": 2,
                        "className": "table-title"
                      },
                      "id": "6416453e"
                    },
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "${componentsCn,componentsEn}"
                          },
                          "id": "46354434"
                        }
                      ],
                      "props": {
                        "colspan": 3
                      },
                      "id": "15561522"
                    }
                  ],
                  "props": {
                    "style": "border-collapse: collapse; word-break: break-word; overflow-wrap: break-word; table-layout: fixed; height: 80px;"
                  },
                  "id": "45332f62"
                },
                {
                  "componentName": "tr",
                  "children": [
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "目的港"
                          },
                          "id": "23476144"
                        },
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "Destination"
                          },
                          "id": "6c261855"
                        }
                      ],
                      "props": {
                        "style": "text-align: center;",
                        "colspan": 2,
                        "className": "table-title"
                      },
                      "id": "15c555f5"
                    },
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "${arrivalStation}"
                          },
                          "id": "33633d35"
                        }
                      ],
                      "props": {
                        "colspan": 0,
                        "style": "text-align: center;"
                      },
                      "id": "565a5625"
                    },
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "左栏内容为托运人或其代理人使用本报告时填写，不属于识别范围。运单信息及实际运输货物与报告的一致性于识别范围。运单信息及实际运输货物与报告的一致性由托运人或其代理人承担全部责任。请如实填写并签字、盖章。"
                          },
                          "id": "65412513"
                        },
                        {
                          "componentName": "div",
                          "props": {
                            "style": "margin-top: 20px;"
                          },
                          "id": "863a3625",
                          "children": [
                            {
                              "componentName": "Text",
                              "props": {
                                "text": "签字："
                              },
                              "id": "45268662"
                            },
                            {
                              "componentName": "Text",
                              "props": {
                                "text": "盖章：",
                                "style": "margin-left: 120px;"
                              },
                              "id": "64c433b9"
                            }
                          ]
                        }
                      ],
                      "props": {
                        "colspan": 2,
                        "rowspan": 3
                      },
                      "id": "55426315"
                    }
                  ],
                  "props": {
                    "style": "border-collapse: collapse; word-break: break-word; overflow-wrap: break-word; table-layout: fixed;"
                  },
                  "id": "42122f45"
                },
                {
                  "componentName": "tr",
                  "children": [
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "运单号"
                          },
                          "id": "55235459"
                        },
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "AWB No"
                          },
                          "id": "62232cf1"
                        }
                      ],
                      "props": {
                        "style": "text-align: center;",
                        "colspan": 2,
                        "className": "table-title"
                      },
                      "id": "43672599"
                    },
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "${mblNumber}"
                          },
                          "id": "35472336"
                        }
                      ],
                      "props": {
                        "colspan": 0,
                        "style": "text-align: center;"
                      },
                      "id": "2e313663"
                    }
                  ],
                  "props": {
                    "style": "border-collapse: collapse; word-break: break-word; overflow-wrap: break-word; table-layout: fixed;"
                  },
                  "id": "942c4482"
                },
                {
                  "componentName": "tr",
                  "children": [
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "件数"
                          },
                          "id": "1e453363"
                        },
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "Quantity"
                          },
                          "id": "55342346"
                        }
                      ],
                      "props": {
                        "style": "text-align: center;",
                        "colspan": 2,
                        "className": "table-title"
                      },
                      "id": "46433d25"
                    },
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "${pieceNum}"
                          },
                          "id": "645665a5"
                        }
                      ],
                      "props": {
                        "colspan": 0,
                        "style": "text-align: center;"
                      },
                      "id": "562da244"
                    }
                  ],
                  "props": {
                    "style": "border-collapse: collapse; word-break: break-word; overflow-wrap: break-word; table-layout: fixed;"
                  },
                  "id": "b3625954"
                },
                {
                  "componentName": "tr",
                  "children": [
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "性状描述"
                          },
                          "id": "45443359"
                        },
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "Appearance/Properties"
                          },
                          "id": "624eb42d"
                        },
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "Description"
                          },
                          "id": "56246635"
                        }
                      ],
                      "props": {
                        "style": "text-align: center;",
                        "colspan": 2,
                        "className": "table-title"
                      },
                      "id": "6a62554c"
                    },
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "${productContentCn,productContentEn}"
                          },
                          "id": "45566453"
                        }
                      ],
                      "props": {
                        "colspan": 3
                      },
                      "id": "23255465"
                    }
                  ],
                  "props": {
                    "style": "border-collapse: collapse; word-break: break-word; overflow-wrap: break-word; table-layout: fixed; height: 320px;"
                  },
                  "id": "6e636354"
                }
              ],
              "id": "5444d554"
            }
          ],
          "id": "87ff7b99"
        },
        {
          "componentName": "hr",
          "props": {},
          "id": "45435268"
        },
        {
          "componentName": "div",
          "props": {
            "style": "padding-top: 46px; padding-bottom: 0px; padding-left: 44px; padding-right: 44px; background-color: #fff;"
          },
          "children": [
            {
              "componentName": "Text",
              "props": {
                "text": "航空运输危险性识别报告书",
                "style": "display: block; text-align: center; font-size: 29px;"
              },
              "id": "62725b63"
            },
            {
              "componentName": "div",
              "props": {
                "style": "margin-top: 20px; display: block; text-align: right;",
                "className": "page-des"
              },
              "children": [
                {
                  "componentName": "Text",
                  "props": {
                    "text": "page 3 of 3 pages"
                  },
                  "id": "445235a2"
                }
              ],
              "id": "26656344"
            },
            {
              "componentName": "table",
              "props": {
                "border": "1",
                "style": "width: 100%; table-layout: fixed; border: 1px solid black; border-collapse: collapse; margin-top: 12px;"
              },
              "children": [
                {
                  "componentName": "tr",
                  "children": [
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "text": "eg",
                            "style": "display: block;"
                          },
                          "id": "f662e6e6"
                        }
                      ],
                      "props": {
                        "style": "width: 180px;"
                      },
                      "id": "31315474"
                    },
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "text": "eg",
                            "style": "display: block;"
                          },
                          "id": "31261341"
                        }
                      ],
                      "props": {},
                      "id": "35653563"
                    }
                  ],
                  "props": {
                    "style": "border-collapse: collapse; word-break: break-word; overflow-wrap: break-word; table-layout: fixed;",
                    "className": "table-first-tr"
                  },
                  "id": "55d41e4e"
                },
                {
                  "componentName": "tr",
                  "children": [
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "委托编号"
                          },
                          "id": "43546825"
                        },
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "Application No."
                          },
                          "id": "56d65333"
                        }
                      ],
                      "props": {
                        "style": "text-align: center;",
                        "colspan": 0,
                        "className": "table-title"
                      },
                      "id": "35322d16"
                    },
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "${identifyCode}"
                          },
                          "id": "255d4e38"
                        }
                      ],
                      "props": {
                        "colspan": 0
                      },
                      "id": "2322223d"
                    }
                  ],
                  "props": {
                    "style": "border-collapse: collapse; word-break: break-word; overflow-wrap: break-word; table-layout: fixed;"
                  },
                  "id": "48fb2424"
                },
                {
                  "componentName": "tr",
                  "children": [
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "识别依据"
                          },
                          "id": "124a2446"
                        },
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "Criteria"
                          },
                          "id": "31142932"
                        }
                      ],
                      "props": {
                        "style": "text-align: center;",
                        "colspan": 0
                      },
                      "id": "82633555"
                    },
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "${recordBasis}"
                          },
                          "id": "4253b215"
                        }
                      ],
                      "props": {
                        "colspan": 0
                      },
                      "id": "3156e566"
                    }
                  ],
                  "props": {
                    "style": "border-collapse: collapse; word-break: break-word; overflow-wrap: break-word; table-layout: fixed;"
                  },
                  "id": "43331754"
                },
                {
                  "componentName": "tr",
                  "children": [
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "危险性识别"
                          },
                          "id": "33343634"
                        },
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "Hazard"
                          },
                          "id": "44526e34"
                        },
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "Identification"
                          },
                          "id": "a3355354"
                        }
                      ],
                      "props": {
                        "style": "text-align: center;",
                        "colspan": 0,
                        "className": "table-title"
                      },
                      "id": "95357433"
                    },
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "${dangerInfoCn,dangerInfoEn}"
                          },
                          "id": "42325a44"
                        }
                      ],
                      "props": {
                        "colspan": 0
                      },
                      "id": "42b14431"
                    }
                  ],
                  "props": {
                    "style": "border-collapse: collapse; word-break: break-word; overflow-wrap: break-word; table-layout: fixed; height: 230px;"
                  },
                  "id": "64232457"
                },
                {
                  "componentName": "tr",
                  "children": [
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "识别结论"
                          },
                          "id": "67422356"
                        },
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "Identification"
                          },
                          "id": "61134411"
                        },
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "Conclusion"
                          },
                          "id": "12351712"
                        }
                      ],
                      "props": {
                        "style": "text-align: center;",
                        "colspan": 0,
                        "className": "table-title"
                      },
                      "id": "516c2251"
                    },
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "${identificationCn,identificationEn}"
                          },
                          "id": "1225656a"
                        }
                      ],
                      "props": {
                        "colspan": 0
                      },
                      "id": "543c2235"
                    }
                  ],
                  "props": {
                    "style": "border-collapse: collapse; word-break: break-word; overflow-wrap: break-word; table-layout: fixed; height: 130px;"
                  },
                  "id": "1535573e"
                },
                {
                  "componentName": "tr",
                  "children": [
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "储运注意事项"
                          },
                          "id": "3a462622"
                        },
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "Handling and"
                          },
                          "id": "55a6463f"
                        },
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "Storage"
                          },
                          "id": "55341224"
                        }
                      ],
                      "props": {
                        "style": "text-align: center;",
                        "colspan": 0,
                        "className": "table-title"
                      },
                      "id": "16641366"
                    },
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "style": "display: block;",
                            "className": "text-min-height",
                            "text": "${storageCn,storageEn}"
                          },
                          "id": "26262462"
                        }
                      ],
                      "props": {
                        "colspan": 0
                      },
                      "id": "645c2234"
                    }
                  ],
                  "props": {
                    "style": "border-collapse: collapse; word-break: break-word; overflow-wrap: break-word; table-layout: fixed; height: 150px;"
                  },
                  "id": "33512416"
                },
                {
                  "componentName": "tr",
                  "children": [
                    {
                      "componentName": "td",
                      "children": [
                        {
                          "componentName": "div",
                          "props": {
                            "style": "display: block; margin-bottom: 20px;"
                          },
                          "id": "73261224",
                          "children": [
                            {
                              "componentName": "div",
                              "props": {
                                "style": "width: 33%; display: inline-block;"
                              },
                              "id": "43226522",
                              "children": [
                                {
                                  "componentName": "Text",
                                  "props": {
                                    "text": "检验员",
                                    "className": "text-min-height",
                                    "style": "display: block;"
                                  },
                                  "id": "f4692524"
                                },
                                {
                                  "componentName": "Text",
                                  "props": {
                                    "text": "Inspected by",
                                    "className": "text-min-height",
                                    "style": "display: block;"
                                  },
                                  "id": "27e26a24"
                                },
                                {
                                  "componentName": "div",
                                  "props": {
                                    "style": "height: 50px; margin-top: 6px; overflow: hidden;"
                                  },
                                  "id": "45be3569",
                                  "children": [
                                    {
                                      "componentName": "Img",
                                      "props": {
                                        "src": "${identifySign}",
                                        "style": "width: 50px; height: 50px;"
                                      },
                                      "id": "43356266"
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "componentName": "div",
                              "props": {
                                "style": "width: 33%; display: inline-block;"
                              },
                              "children": [
                                {
                                  "componentName": "Text",
                                  "props": {
                                    "className": "text-min-height",
                                    "style": "display: block;",
                                    "text": "审核人"
                                  },
                                  "id": "56422346"
                                },
                                {
                                  "componentName": "Text",
                                  "props": {
                                    "text": "Reviewed by",
                                    "className": "text-min-height",
                                    "style": "display: block;"
                                  },
                                  "id": "12713522"
                                },
                                {
                                  "componentName": "div",
                                  "props": {
                                    "style": "height: 50px; margin-top: 6px; overflow: hidden;"
                                  },
                                  "children": [
                                    {
                                      "componentName": "Img",
                                      "props": {
                                        "src": "${firstTrialSign}",
                                        "style": "width: 50px; height: 50px;"
                                      },
                                      "id": "64664351"
                                    }
                                  ],
                                  "id": "3164b163"
                                }
                              ],
                              "id": "35563746"
                            },
                            {
                              "componentName": "div",
                              "props": {
                                "style": "width: 33%; display: inline-block;"
                              },
                              "children": [
                                {
                                  "componentName": "Text",
                                  "props": {
                                    "className": "text-min-height",
                                    "style": "display: block;",
                                    "text": "批准人"
                                  },
                                  "id": "62156346"
                                },
                                {
                                  "componentName": "Text",
                                  "props": {
                                    "text": "Approved by",
                                    "className": "text-min-height",
                                    "style": "display: block;"
                                  },
                                  "id": "4262e624"
                                },
                                {
                                  "componentName": "div",
                                  "props": {
                                    "style": "height: 50px; margin-top: 6px; overflow: hidden;"
                                  },
                                  "children": [
                                    {
                                      "componentName": "Img",
                                      "props": {
                                        "style": "width: 50px; height: 50px;",
                                        "src": "${trialSign}"
                                      },
                                      "id": "5452615b"
                                    }
                                  ],
                                  "id": "26446243"
                                }
                              ],
                              "id": "65343143"
                            }
                          ]
                        },
                        {
                          "componentName": "div",
                          "props": {
                            "style": "display: block; margin-bottom: 20px;"
                          },
                          "children": [
                            {
                              "componentName": "div",
                              "props": {
                                "style": "width: 33%; display: inline-block;"
                              },
                              "children": [
                                {
                                  "componentName": "Text",
                                  "props": {
                                    "className": "text-min-height",
                                    "style": "display: block;",
                                    "text": "报告单位盖章"
                                  },
                                  "id": "24356445"
                                },
                                {
                                  "componentName": "Text",
                                  "props": {
                                    "text": "Stamp",
                                    "className": "text-min-height",
                                    "style": "display: block;"
                                  },
                                  "id": "127155e3"
                                },
                                {
                                  "componentName": "div",
                                  "props": {
                                    "style": "height: 50px; margin-top: 6px; overflow: hidden;"
                                  },
                                  "children": [
                                    {
                                      "componentName": "Text",
                                      "props": {
                                        "className": "text-min-height",
                                        "style": "display: block;"
                                      },
                                      "id": "95132255"
                                    }
                                  ],
                                  "id": "42434252"
                                }
                              ],
                              "id": "5125534d"
                            },
                            {
                              "componentName": "div",
                              "props": {
                                "style": "width: 33%; display: inline-block;"
                              },
                              "children": [
                                {
                                  "componentName": "Text",
                                  "props": {
                                    "className": "text-min-height",
                                    "style": "display: block;",
                                    "text": "检验日期"
                                  },
                                  "id": "a9355252"
                                },
                                {
                                  "componentName": "Text",
                                  "props": {
                                    "className": "text-min-height",
                                    "style": "display: block;",
                                    "text": "Date of Identification"
                                  },
                                  "id": "5541434f"
                                },
                                {
                                  "componentName": "div",
                                  "props": {
                                    "style": "height: 50px; margin-top: 6px; overflow: hidden;"
                                  },
                                  "children": [
                                    {
                                      "componentName": "Text",
                                      "props": {
                                        "text": "${trialTime}",
                                        "className": "text-min-height",
                                        "style": "display: block;"
                                      },
                                      "id": "2c463452"
                                    }
                                  ],
                                  "id": "53461531"
                                }
                              ],
                              "id": "33433536"
                            },
                            {
                              "componentName": "div",
                              "props": {
                                "style": "width: 33%; display: inline-block;"
                              },
                              "children": [
                                {
                                  "componentName": "Text",
                                  "props": {
                                    "className": "text-min-height",
                                    "style": "display: block;",
                                    "text": "签发日期"
                                  },
                                  "id": "26335536"
                                },
                                {
                                  "componentName": "Text",
                                  "props": {
                                    "text": "Date of Issue",
                                    "className": "text-min-height",
                                    "style": "display: block;"
                                  },
                                  "id": "43442566"
                                },
                                {
                                  "componentName": "div",
                                  "props": {
                                    "style": "height: 50px; margin-top: 6px; overflow: hidden;"
                                  },
                                  "children": [
                                    {
                                      "componentName": "Text",
                                      "props": {
                                        "text": "${realForceTime}",
                                        "className": "text-min-height",
                                        "style": "display: block;"
                                      },
                                      "id": "25365155"
                                    }
                                  ],
                                  "id": "671f352e"
                                }
                              ],
                              "id": "42564334"
                            }
                          ],
                          "id": "354534d6"
                        }
                      ],
                      "props": {
                        "style": "text-align: center;",
                        "colspan": 2
                      },
                      "id": "66323523"
                    }
                  ],
                  "props": {
                    "style": "border-collapse: collapse; word-break: break-word; overflow-wrap: break-word; table-layout: fixed;"
                  },
                  "id": "65236366"
                }
              ],
              "id": "63b32225"
            },
            {
              "componentName": "div",
              "props": {
                "style": "margin-top: 5px; padding-left: 10px; padding-right: 10px; font-size: 16px;"
              },
              "id": "41316676",
              "children": [
                {
                  "componentName": "div",
                  "props": {
                    "style": "display: inline-block; width: 50%;"
                  },
                  "id": "4546a224",
                  "children": [
                    {
                      "componentName": "Text",
                      "props": {
                        "text": "制"
                      },
                      "id": "45612333"
                    },
                    {
                      "componentName": "Text",
                      "props": {
                        "text": "表",
                        "style": "font-weight: 700;"
                      },
                      "id": "36564522"
                    },
                    {
                      "componentName": "Text",
                      "props": {
                        "text": "人：",
                        "style": "font-weight: 400;"
                      },
                      "id": "23366324"
                    },
                    {
                      "componentName": "Text",
                      "props": {
                        "style": "font-weight: 400;",
                        "text": "${creatorName}"
                      },
                      "id": "22255635"
                    }
                  ]
                },
                {
                  "componentName": "div",
                  "props": {
                    "style": "display: inline-block; width: 50%; text-align: right;"
                  },
                  "id": "34632d56",
                  "children": [
                    {
                      "componentName": "Text",
                      "props": {
                        "text": "打印人："
                      },
                      "id": "f6663661"
                    },
                    {
                      "componentName": "Text",
                      "props": {
                        "text": "${printerName}"
                      },
                      "id": "f6851423"
                    }
                  ]
                }
              ]
            }
          ],
          "id": "735f5656"
        }
      ],
      "fileName": "createVm"
    }
  ],
  "componentsMap": [
      {
          "componentName": "TinyCarouselItem",
          "package": "@opentiny/vue",
          "exportName": "CarouselItem",
          "destructuring": true,
          "version": "0.1.16"
      },
      {
          "componentName": "TinyCheckboxButton",
          "package": "@opentiny/vue",
          "exportName": "CheckboxButton",
          "destructuring": true,
          "version": "0.1.17"
      },
      {
          "componentName": "TinyTree",
          "package": "@opentiny/vue",
          "exportName": "Tree",
          "destructuring": true,
          "version": "0.1.16"
      },
      {
          "componentName": "TinyPopover",
          "package": "@opentiny/vue",
          "exportName": "Popover",
          "destructuring": true,
          "version": "0.1.16"
      },
      {
          "componentName": "TinyTooltip",
          "package": "@opentiny/vue",
          "exportName": "Tooltip",
          "destructuring": true,
          "version": "3.2.0"
      },
      {
          "componentName": "TinyCol",
          "package": "@opentiny/vue",
          "exportName": "Col",
          "destructuring": true,
          "version": "0.1.16"
      },
      {
          "componentName": "TinyDropdownItem",
          "package": "@opentiny/vue",
          "exportName": "DropdownItem",
          "destructuring": true,
          "version": "0.1.16"
      },
      {
          "componentName": "TinyPager",
          "package": "@opentiny/vue",
          "exportName": "Pager",
          "destructuring": true,
          "version": "0.1.16"
      },
      {
          "componentName": "TinyPlusAccessdeclined",
          "package": "@opentiny/vue",
          "exportName": "AccessDeclined",
          "destructuring": true,
          "version": "3.4.1"
      },
      {
          "componentName": "TinyPlusFrozenPage",
          "package": "@opentiny/vuee",
          "exportName": "FrozenPage",
          "destructuring": true,
          "version": "3.4.1"
      },
      {
          "componentName": "TinyPlusNonSupportRegion",
          "package": "@opentiny/vue",
          "exportName": "NonSupportRegion",
          "destructuring": true,
          "version": "3.4.1"
      },
      {
          "componentName": "TinyPlusBeta",
          "package": "@opentiny/vue",
          "exportName": "Beta",
          "destructuring": true,
          "version": "3.4.1"
      },
      {
          "componentName": "TinySearch",
          "package": "@opentiny/vue",
          "exportName": "Search",
          "destructuring": true,
          "version": "0.1.13"
      },
      {
          "componentName": "TinyRow",
          "package": "@opentiny/vue",
          "exportName": "Row",
          "destructuring": true,
          "version": "0.1.16"
      },
      {
          "componentName": "TinyFormItem",
          "package": "@opentiny/vue",
          "exportName": "FormItem",
          "destructuring": true,
          "version": "0.1.16"
      },
      {
          "componentName": "TinyAlert",
          "package": "@opentiny/vue",
          "exportName": "Alert",
          "destructuring": true,
          "version": "3.2.0"
      },
      {
          "componentName": "TinyInput",
          "package": "@opentiny/vue",
          "exportName": "Input",
          "destructuring": true,
          "version": "0.1.16"
      },
      {
          "componentName": "TinyTabs",
          "package": "@opentiny/vue",
          "exportName": "Tabs",
          "destructuring": true,
          "version": "0.1.16"
      },
      {
          "componentName": "TinyDropdownMenu",
          "package": "@opentiny/vue",
          "exportName": "DropdownMenu",
          "destructuring": true,
          "version": "0.1.16"
      },
      {
          "componentName": "TinyDialogBox",
          "package": "@opentiny/vue",
          "exportName": "DialogBox",
          "destructuring": true,
          "version": "3.2.0"
      },
      {
          "componentName": "TinySwitch",
          "package": "@opentiny/vue",
          "exportName": "Switch",
          "destructuring": true,
          "version": "0.1.16"
      },
      {
          "componentName": "TinyTimeLine",
          "package": "@opentiny/vue",
          "exportName": "TimeLine",
          "destructuring": true,
          "version": "0.1.16"
      },
      {
          "componentName": "TinyTabItem",
          "package": "@opentiny/vue",
          "exportName": "TabItem",
          "destructuring": true,
          "version": "0.1.16"
      },
      {
          "componentName": "TinyRadio",
          "package": "@opentiny/vue",
          "exportName": "Radio",
          "destructuring": true,
          "version": "0.1.16"
      },
      {
          "componentName": "TinyForm",
          "package": "@opentiny/vue",
          "exportName": "Form",
          "destructuring": true,
          "version": "0.1.16"
      },
      {
          "componentName": "TinyGrid",
          "package": "@opentiny/vue",
          "exportName": "Grid",
          "destructuring": true,
          "version": "0.1.16"
      },
      {
          "componentName": "TinyNumeric",
          "package": "@opentiny/vue",
          "exportName": "Numeric",
          "destructuring": true,
          "version": "0.1.16"
      },
      {
          "componentName": "TinyCheckboxGroup",
          "package": "@opentiny/vue",
          "exportName": "CheckboxGroup",
          "destructuring": true,
          "version": "0.1.17"
      },
      {
          "componentName": "TinySelect",
          "package": "@opentiny/vue",
          "exportName": "Select",
          "destructuring": true,
          "version": "0.1.16"
      },
      {
          "componentName": "TinyButtonGroup",
          "package": "@opentiny/vue",
          "exportName": "ButtonGroup",
          "destructuring": true,
          "version": "0.1.16"
      },
      {
          "componentName": "TinyCarousel",
          "package": "@opentiny/vue",
          "exportName": "Carousel",
          "destructuring": true,
          "version": "0.1.16"
      },
      {
          "componentName": "TinyPopeditor",
          "package": "@opentiny/vue",
          "exportName": "Popeditor",
          "destructuring": true,
          "version": "0.1.16"
      },
      {
          "componentName": "TinyDatePicker",
          "package": "@opentiny/vue",
          "exportName": "DatePicker",
          "destructuring": true,
          "version": "0.1.16"
      },
      {
          "componentName": "TinyDropdown",
          "package": "@opentiny/vue",
          "exportName": "Dropdown",
          "destructuring": true,
          "version": "0.1.20"
      },
      {
          "componentName": "TinyChartHistogram",
          "package": "@opentiny/vue",
          "exportName": "ChartHistogram",
          "destructuring": true,
          "version": "0.1.16"
      },
      {
          "componentName": "PortalHome",
          "main": "common/components/home",
          "destructuring": false,
          "version": "1.0.0"
      },
      {
          "componentName": "PreviewBlock1",
          "main": "preview",
          "destructuring": false,
          "version": "1.0.0"
      },
      {
          "componentName": "PortalHeader",
          "main": "common",
          "destructuring": false,
          "version": "1.0.0"
      },
      {
          "componentName": "PortalBlock",
          "main": "portal",
          "destructuring": false,
          "version": "1.0.0"
      },
      {
          "componentName": "PortalPermissionBlock",
          "main": "",
          "destructuring": false,
          "version": "1.0.0"
      }
  ],
  "bridge": [],
  "utils": [
      {
          "name": "axios",
          "type": "npm",
          "content": {
              "type": "JSFunction",
              "value": "",
              "package": "axios",
              "destructuring": false,
              "exportName": "axios"
          }
      },
      {
          "name": "Button",
          "type": "npm",
          "content": {
              "package": "@opentiny/vue",
              "version": "",
              "exportName": "Button",
              "subName": "",
              "destructuring": true,
              "main": ""
          }
      },
      {
          "name": "Menu",
          "type": "npm",
          "content": {
              "type": "JSFunction",
              "value": "",
              "package": "@opentiny/vue",
              "exportName": "NavMenu",
              "destructuring": true
          }
      },
      {
          "name": "Modal ",
          "type": "npm",
          "content": {
              "package": "@opentiny/vue",
              "version": "",
              "exportName": "Modal ",
              "subName": "",
              "destructuring": true,
              "main": ""
          }
      },
      {
          "name": "npm",
          "type": "function",
          "content": {
              "type": "JSFunction",
              "value": "''"
          }
      },
      {
          "name": "Pager",
          "type": "npm",
          "content": {
              "package": "@opentiny/vue",
              "version": "",
              "exportName": "Pager",
              "subName": "",
              "destructuring": true,
              "main": ""
          }
      },
      {
          "name": "test",
          "type": "function",
          "content": {
              "type": "JSFunction",
              "value": "function util() {\r\n  console.log(3211)\r\n}"
          }
      },
      {
          "name": "util",
          "type": "function",
          "content": {
              "type": "JSFunction",
              "value": "function util () {\r\n  console.log(321)\r\n}"
          }
      }
  ],
  "config": {
      "sdkVersion": "1.0.3",
      "historyMode": "hash",
      "targetRootID": "app"
  },
  "constants": "",
  "css": "",
  "version": ""
}
export default Data