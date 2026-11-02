# ClearPath 模板使用规则

心理咨询与成长教练的响应式网站模板。提供首页、关于、服务、案例列表、5 个案例详情、期刊列表、5 篇文章、预约、隐私、条款及 404，共 19 个页面，默认中文，英文位于对应 `/en` 路径。

## 准备与运行

固定 Node 24.16.0（见 `.nvmrc`）、pnpm 9.15.4。使用 `corepack pnpm install --frozen-lockfile` 安装现有锁定依赖。不需要数据库、外部 API 或真实凭据。开发执行 `pnpm dev`，默认 http://127.0.0.1:43642；生产先 `pnpm build` 再 `pnpm start`。通过 PORT 与 BIND_HOST 调整监听，`.env.example` 提供非秘密示例；启动脚本直接读取进程环境，未自动加载 .env。终端 Ctrl+C 停止本次服务，不关闭其他进程。安装与构建应在本地 Linux 文件系统完成。

## 检查与修改

执行 `pnpm typecheck`、`pnpm lint`、`pnpm test`、`pnpm build`。`pnpm tpl:check` 只检查模板协议与索引。先阅读 `.tpl/docs/CUSTOMIZATION.md`；品牌和文案在 `src/features/clearpath/content/`，主题在 theme.css，动效在 components/Motion.tsx，路由注册在 template.tsx，页面在 pages/。支持将 template 与 host 两个包入口接入另一个 Next 应用；消费方注入品牌，默认站点不依赖消费方工程。

## 能力与限制

本地图片与 MiSans/Poppins 字体、滚动路径、逐字揭示、视差、数字递增、价格切换、FAQ、手机菜单、团队弹窗、双语导航与本地表单校验。减少动态设置下提供静态内容。预约和订阅不会发送、保存或创建真实业务记录。人物、价格、案例与评分为演示内容，政策依据演示行为编写。参考图片、肖像及英文内容授权未确认，保持 listed=false；上线前应确认素材与服务资质，并替换演示信息。详细来源见 docs/ASSETS.md 与 docs/assets.json。

## 交付

Git 提交源码、锁文件、.tpl 与本地素材；排除依赖、缓存、日志与私密配置。`pnpm bundle` 要求本地 WSL Linux 文件系统和干净提交，生成供消费方固定的运行包。当前实际验收见 `.tpl/docs/VERIFICATION.md`，检查事实和源码摘要以 reports/verification.json 为准；不将格式检查描述为功能验收。
