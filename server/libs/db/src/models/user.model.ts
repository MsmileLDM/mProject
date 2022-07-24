import { Prop, modelOptions } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class User {
  @ApiProperty({ description: '用户名', example: 'user1' })
  @Prop()
  username: string;

  @ApiProperty({ description: '密码', example: '123456' })
  @Prop()
  password: string;

  @ApiProperty({ description: '邮箱', example: '123456789.@qq.com' })
  @Prop()
  email: string;

  @ApiProperty({ description: '类型', example: 1 })
  @Prop()
  type: number;

  @ApiProperty({ description: '年龄', example: '18' })
  @Prop()
  age: string;

  @ApiProperty({ description: '性别', example: '' })
  @Prop()
  sex: string;

  @ApiProperty({ description: '电话号码', example: '18026548975' })
  @Prop()
  tel: string;

  @ApiProperty({ description: '地址', example: '广东省深圳市' })
  @Prop()
  addr: string;
}
