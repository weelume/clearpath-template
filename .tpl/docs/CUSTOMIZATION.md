# 修改指南

品牌、邮箱、服务、FAQ 与流程：content/site.ts。团队：pages/AboutPage.tsx。案例与文章：content/details.ts；英文源段落在 reference.json，任何中文段落缺失会使测试失败。主题与字号：theme.css 顶部令牌；中英文均使用本地 MiSans/Poppins。动效：components/Motion.tsx，保留减少动态设置。新增页面：创建 pages 模块，并同步 template.tsx、.tpl/template.json 与实际预览。表单：components/Booking.tsx，只做当前页面校验。素材替换：public/templates/clearpath，更新 docs/assets.json 的来源、摘要及许可。

发布前运行 typecheck/lint/test/build；在1440×1000、834×1180、390×844与320px验证影响页面。展示图保存 .tpl/assets/，按实际解码尺寸更新 content/screenshots.json 和 .tpl/template.json。
