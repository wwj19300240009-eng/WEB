# AI考古课程 - 学生作业展示网站

## 📖 项目介绍

这是一个专为AI考古课程打造的学生作业展示门户网站，采用**移动优先（Mobile First）**的响应式设计理念，完美适配手机、平板和桌面设备。

### ✨ 主要特性

- 📱 **移动端优化** - 专为手机浏览体验设计，触摸友好
- 🎨 **现代化UI** - 渐变色背景，卡片式布局，悬停动画效果
- 🎬 **视频展示** - 模型作业支持在线视频播放（模态框）
- 📄 **PDF预览** - 综述作业支持PDF在线查看和下载
- 🔍 **搜索筛选** - 支持按作者、关键词、标签筛选
- ⚡ **纯静态** - 无需服务器，可直接部署到GitHub Pages
- 🌐 **无依赖** - 使用CDN加载，无需npm安装

## 📂 项目结构

```
AI考古/
├── index.html          # 首页
├── surveys.html        # 综述作业展示页
├── projects.html       # 模型项目展示页
├── data.json          # 数据配置文件
├── README.md          # 说明文档
├── 综述作业/           # 综述PDF文件目录
│   ├── AI考古综述作业-苏宇欣-24210700099.pdf
│   ├── 中国纤贝（AlphaFiber 1.0）在纤维材料考古研究中的应用（徐菲 24110540027）.pdf
│   └── ...
└── 模型作业/           # 模型视频和PDF目录
    ├── 22110860038_叶嘉鑫_甲骨文.mp4
    ├── 叶嘉鑫-作品介绍.pdf
    └── ...
```

## 🚀 部署到GitHub Pages

### 方法一：直接通过GitHub网页操作

1. **创建GitHub仓库**
   - 登录GitHub，点击右上角 "+" → "New repository"
   - 仓库名建议：`ai-archaeology-course`
   - 设置为 Public（公开）
   - 点击 "Create repository"

2. **上传文件**
   - 在仓库页面点击 "uploading an existing file"
   - 将以下文件拖拽上传：
     - `index.html`
     - `surveys.html`
     - `projects.html`
     - `data.json`
     - `README.md`
     - 整个 `综述作业` 文件夹
     - 整个 `模型作业` 文件夹
   - 点击 "Commit changes"

3. **启用GitHub Pages**
   - 进入仓库的 Settings → Pages
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "main"（或 "master"）
   - 文件夹选择 "/ (root)"
   - 点击 "Save"
   - 等待1-2分钟后，页面会显示网站地址：
     `https://你的用户名.github.io/ai-archaeology-course/`

### 方法二：使用Git命令行

```bash
# 1. 在本地项目文件夹中初始化Git
cd "C:\Users\ROG\Desktop\AI考古"
git init

# 2. 添加所有文件
git add .

# 3. 提交
git commit -m "初始化AI考古课程网站"

# 4. 关联远程仓库（替换为你的GitHub用户名）
git remote add origin https://github.com/你的用户名/ai-archaeology-course.git

# 5. 推送到GitHub
git branch -M main
git push -u origin main

# 6. 在GitHub仓库设置中启用Pages（见方法一步骤3）
```

### ⚠️ 视频文件处理建议

由于视频文件较大（通常超过100MB），GitHub有文件大小限制：

**选项1：使用Git LFS（大文件存储）**
```bash
# 安装Git LFS
git lfs install

# 追踪视频文件
git lfs track "模型作业/*.mp4"
git add .gitattributes
git add 模型作业/*.mp4
git commit -m "添加视频文件（Git LFS）"
git push
```

**选项2：使用外部视频托管（推荐）**
将视频上传到：
- 哔哩哔哩（Bilibili）
- YouTube
- 阿里云OSS / 腾讯云COS

然后修改 `data.json` 中的 `videoPath` 为外部链接：
```json
"videoPath": "https://www.bilibili.com/video/BV1xx411c7mD"
```

同时修改 `projects.html` 中的视频播放器为iframe嵌入：
```html
<iframe src="视频链接" allowfullscreen></iframe>
```

## 📱 移动端优化特性

### 响应式断点
- **手机端** (< 640px): 单列布局，大按钮，简化导航
- **平板端** (640px - 1024px): 双列布局
- **桌面端** (> 1024px): 三列网格布局

### 移动端专属优化
✅ 触摸友好的卡片设计  
✅ 汉堡菜单导航  
✅ 优化的视频播放器（支持全屏）  
✅ 自适应字体大小  
✅ 防止横向滚动  
✅ 快速加载（使用CDN）  

## 🎨 技术栈

- **HTML5** - 语义化标签
- **Tailwind CSS** - 实用优先的CSS框架（CDN）
- **Font Awesome** - 图标库（CDN）
- **Vanilla JavaScript** - 原生JS，无框架依赖
- **Google Fonts** - 思源黑体（Noto Sans SC）

## 📝 自定义配置

### 添加新的综述作业

编辑 `data.json`，在 `surveys` 数组中添加：

```json
{
  "id": 7,
  "author": "学生姓名",
  "studentId": "学号",
  "title": "综述标题",
  "pdfPath": "./综述作业/文件名.pdf",
  "description": "简短描述",
  "tags": ["标签1", "标签2"]
}
```

### 添加新的模型项目

编辑 `data.json`，在 `projects` 数组中添加：

```json
{
  "id": 7,
  "author": "学生姓名",
  "studentId": "学号",
  "title": "项目名称",
  "videoPath": "./模型作业/视频文件.mp4",
  "pdfPath": "./模型作业/介绍PDF.pdf",
  "description": "项目详细描述",
  "tags": ["标签1", "标签2", "标签3"]
}
```

### 修改配色方案

在各HTML文件的 `<style>` 标签中修改 `.gradient-bg` 类：

```css
.gradient-bg {
    background: linear-gradient(135deg, #你的颜色1 0%, #你的颜色2 100%);
}
```

推荐配色：
- 学术蓝：`#667eea` → `#764ba2`
- 考古棕：`#8B4513` → `#D2691E`
- 文物金：`#FFD700` → `#FFA500`

## 🔧 常见问题

### 1. 视频无法播放？
- 检查视频文件路径是否正确
- 确保视频格式为MP4（H.264编码）
- 如果文件过大，考虑压缩或使用外部托管

### 2. PDF无法预览？
- PDF预览功能依赖浏览器支持
- 可以点击下载按钮直接下载PDF
- 建议PDF文件小于10MB

### 3. 手机端布局错乱？
- 清除浏览器缓存
- 确保使用最新版的Chrome/Safari浏览器
- 检查是否有自定义CSS冲突

### 4. GitHub Pages不显示？
- 等待5-10分钟（GitHub Pages需要构建时间）
- 检查仓库设置中Pages是否正确启用
- 确保index.html在仓库根目录

## 📊 性能优化建议

1. **图片优化**：如果添加缩略图，使用WebP格式并压缩
2. **视频优化**：视频文件压缩到1080p，码率控制在5Mbps以下
3. **PDF优化**：PDF压缩，建议单个文件不超过5MB
4. **CDN缓存**：使用的CDN资源会自动缓存

## 📞 技术支持

如有问题，可以：
1. 查看浏览器控制台（F12）的错误信息
2. 检查 `data.json` 格式是否正确
3. 确认文件路径是否匹配

## 📄 许可证

本项目采用 MIT 许可证。

---

**🎓 AI考古课程 © 2025**

祝您部署顺利！如有疑问欢迎联系。

