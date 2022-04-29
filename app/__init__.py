from flask import Flask
from config import Config
# from flask_sqlalchemy import SQLAlchemy
# from flask_migrate import Migrate#数据库迁移引擎migrate
from flask_sqlalchemy import SQLAlchemy


datacenter = Flask(__name__)

datacenter.config.from_object(Config)

#初始化扩展，传入app 创建db
db = SQLAlchemy(datacenter)

from app import  routes
#添加配置文件


# from app import  routes
print(type(db))

sql = 'select * from url_list'
result = db.session.execute(sql)

data = result.fetchall()


print(data)



for i in data:
    print(i['url'])
# for i in result.fetchall():
#     print(i)
#     print(11)
# cursor = db.cursor()
#
# hello= result.fetchall()
# print(hello[0])
# print(result.fetchall()[1])
# print(db.query.all())
# print(type(datacenter.config.from_object))
# app.run(debug=True)
# app.config[在PyCharm的启动配置中勾选debug模式 勾选后再次启动,调试模式启动成功'DEBUG'] = True


# db = SQLAlchemy(app)#在models被引用的实例
# migrate = Migrate(app, db)

# from app import routes, models#定义数据库结构。

# app.config['SECRET_KEY'] = 'you-will-never-guess'
# print("okk")