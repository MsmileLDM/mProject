# mProject

nodeJs + vueJs + nestJs

# 全局安装 yarn

npm i -g yarn

# 全局安装 next

yarn global add @nestjs/cli

# 初始化后台项目（https://nestjs.bootcss.com/first-steps）

|     | 操作                                 | 说明                                                                                                                                            |
| --- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | nest new server                      | 创建 server 文件夹（存放所有的服务端代码）                                                                                                      |
| 2   | 1.cd server<br /> 2.nest g app admin | （https://nestjs.bootcss.com/cli/workspaces），monorepo mode 多个项目放进一个仓库内（单体仓库模式），standard mode 标准模式，适合单个服务端项目 |
| 3   |                                      |                                                                                                                                                 |

# 启动项目

nest start -w 项目名

# 添加公共数据库模块

外层 server 下创建 libs 目录 nest g lib db
进入 admin 目录 下 src/admin.module.ts 中，imports 加上 DbModule 模块

## 安装数据库模块

yarn add nestjs-typegoose @typegoose/typegoose

## 安装 mongoose 和提示模块

yarn add mongoose @types/mongoose

### server\libs\db\src\db.module.ts

引入 nestjs-typegoose 模块

```typescript
...
+ import { TypegooseModule } from "nestjs-typegoose";

@Module({
  + imports: [
  +  TypegooseModule.forRoot("mongodb://localhost:27017/MsmileApp")
  + ]
  ...
})
```

# 一行代码实现 crud

yarn add nestjs-mongoose-crud

# 添加 swagger

yarn add @nestjs/swagger swagger-ui-express


# 添加模块

nest g mo -p admin users
nest g co -p admin users
