import pymysql

# 打开数据库连接
# db = pymysql.connect("sh-cynosdbmysql-grp-gt91zapg.sql.tencentcdb.com", "root", "!abc123456", "mysql", port=26963, charset='utf8')
# db = pymysql.connect(host="sh-cynosdbmysql-grp-gt91zapg.sql.tencentcdb.com", user="root", passwd="!abc123456", database="data_center", port=26963)
# 端口号3306，utf-8编码，否则中文有可能会出现乱码。
# sql = '''SELECT * from url_list'''
# try:
#     cursor = db.cursor()
#     cursor.execute(sql)
#     text=cursor.fetchall()#按行读取 0是第一行
#     print(text[0])
# except Exception as e:
#     db.rollback()  # 如果出错就回滚并且抛出错误收集错误信息。
#     print("Error!:{0}".format(e))
# finally:
#     db.close()
# 关闭数据库连接

HOST = 'sh-cynosdbmysql-grp-gt91zapg.sql.tencentcdb.com'
USER = 'root'
PW = '!abc123456'
DB = 'data_center'
port = 26963

import os

# basedir = os.path.abspath(os.path.dirname(__file__))

class Config(object):
    # HOST = 'sh-cynosdbmysql-grp-gt91zapg.sql.tencentcdb.com'
    # USER = 'root'
    # PW = '!abc123456'
    # DB = 'data_center'
    # port = 26963

    DIALCT = "mysql"
    DRITVER = "pymysql"
    HOST = 'sh-cynosdbmysql-grp-gt91zapg.sql.tencentcdb.com'
    PORT = "26963"
    USERNAME = "root"
    PASSWORD = "!abc123456"
    DBNAME = 'data_center'


    SQLALCHEMY_DATABASE_URI = f"{DIALCT}+{DRITVER}://{USERNAME}:{PASSWORD}@{HOST}:{PORT}/{DBNAME}?charset=utf8"
    SQLALCHEMY_TRACK_MODIFICATIONS = True
    # SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    # SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
    #     'sqlite:///' + os.path.join(basedir, 'app.db')#返回数据库连接 如果没有的话返回数据库dir加app.db
    # SQLALCHEMY_TRACK_MODIFICATIONS = False