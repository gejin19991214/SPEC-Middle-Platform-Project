# from flask import render_template,flash,redirect,url_for
from app import db
def select_all_data(table_name):
    sql = 'select * from '+table_name
    result = db.session.execute(sql)

    data = result.fetchall()


    return data