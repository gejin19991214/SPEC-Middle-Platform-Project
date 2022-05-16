import requests
import pandas as pd
from lxml import etree
import pymysql
import re
from sqlalchemy import create_engine
conn = pymysql.connect(host='sh-cynosdbmysql-grp-gt91zapg.sql.tencentcdb.com', port=26963, user='root', password='!abc123456', db='data_center')
cur = conn.cursor()
cur.execute("select * from url_list")
list_ = cur.fetchall()
for i in list_:
    if i[5]=='1':
        flag = i[6]
        df = pd.read_csv(i[1]+'.csv')
        df.head()
        new_flag = re.search(r'(\d+)', re.search(r'-(\d+).html', df.iloc[0]['Disclosure']).group()).group()
        df = df.iloc[:(int(new_flag)-int(flag))]
        con = create_engine('mysql+pymysql://root:!abc123456@sh-cynosdbmysql-grp-gt91zapg.sql.tencentcdb.com:26963/data_center?charset=utf8')
        #df.to_sql(i[1], con, if_exists='replace', index=False)
        pd.io.sql.to_sql(df, i[1], con=con,if_exists='append')
        conn1 = pymysql.connect(host='sh-cynosdbmysql-grp-gt91zapg.sql.tencentcdb.com', port=26963, user='root',
                               password='!abc123456', db='data_center')
        cur1 = conn1.cursor()
        cur1.execute('UPDATE url_list SET number = "{new_flag}",flag = "2" WHERE name = "{name}"'.format(new_flag=new_flag, name=i[1]))
        conn1.commit()
        print('update table ' + '{}'.format(i[1]))
        '''
        for j in range(len(df)):
            index = re.search(r'(\d+)', re.search(r'-(\d+).html', df.iloc[j][-2]).group()).group()
            if int(index)>int(flag):
                pass
'''