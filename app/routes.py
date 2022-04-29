from app import datacenter
from flask import render_template,flash,redirect,url_for
from app import db
from app import models

@datacenter.route('/')
@datacenter.route('/index')#可能是个坑
# def index():
#     print(type(db))
#     return "Hello, Wolllllrd!"

def index():#视图函数
    user = {'username':"miguel"}
    # return render_template('index.html', user=user)
    posts = [
        {
            'author':{'username':'jj'},
            'body':'beautiful day'
        },
        {
            'author':{'username':'susan'},
            'body':'the avengers movie was so cool'
        }


    ]


    # print(type(db))

    # sql = 'select * from url_list'
    # result = db.session.execute(sql)
    #
    # data = result.fetchall()

    table_data = models.select_all_data('url_list')

    # table_data = table_data[0]

    # print(data)




    return render_template('index.html',title = 'home',user = user,posts =posts,data = table_data)