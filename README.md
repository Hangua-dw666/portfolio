# Portfolio - Desktop OS 风格个人作品集

仿桌面操作系统的个人作品集主页。桌面图标双击打开窗口，窗口内 iframe 嵌入子项目。

## 本地开发

```bash
npm install
npm run dev  # http://localhost:5174
```

## 部署

推送到 GitHub 后在 Vercel 导入仓库即可，零环境变量。

## 新增项目接入

1. 把项目图标 SVG 放到 `public/icons/`
2. 在 `src/data/apps.json` 加一条记录：

```json
{
  "id": "project-name",
  "name": "项目名",
  "icon": "/icons/project-name.svg",
  "type": "app",
  "url": "https://project-name.vercel.app",
  "sort": 90
}
```

3. 提交代码，Vercel 自动重新部署

## 子项目要求

子项目部署时需允许 iframe 嵌入（Vercel 默认允许，无需额外配置）。

## 内置系统应用

- **关于我**：`type: "system"` + `component: "AboutApp"`，组件在 `src/components/system/AboutApp.vue`
- **联系方式**：`type: "system"` + `component: "ContactApp"`，组件在 `src/components/system/ContactApp.vue`

系统应用不通过 iframe 加载，直接在主页内渲染组件。
