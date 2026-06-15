# 高性能、稳定、兼容的共享库

### 使用

```ts
import { delay } from "@rapeflower/shared"
delay(1000).then(console.log)
```

### 环境

- node: **v22.14.0**
- pnpm: **v11**
- tsdown: **v0.22.2**
- vitest: **v4.1.8**

### 命令

> pnpm build: 打包
>
> pnpm test: 运行测试cases报告
>
> pnpm test:ui: 在浏览器上运行测试cases报告
>
> pnpm coverage: 生成静态的覆盖率报告 (./coverage/index.html)
>
> pnpm bumpp: 升级版本号
>
> pnpm typecheck: 检查ts类型是否有异常
