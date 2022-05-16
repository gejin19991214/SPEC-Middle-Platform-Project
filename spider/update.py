import requests
import pandas as pd
from lxml import etree
import pymysql

conn = pymysql.connect(host='sh-cynosdbmysql-grp-gt91zapg.sql.tencentcdb.com', port=26963, user='root', password='!abc123456', db='data_center')
cur = conn.cursor()
headers = {
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36'
}
cur.execute("select * from url_list")
list_ = cur.fetchall()
for i in list_:
    fin_url = i[2]
    response = requests.get(fin_url,headers=headers)
    tree = etree.HTML(response.content)
    update = tree.xpath("//p//i//text()")[0]
    if update !=i[3]:
        #cur.execute('UPDATE url_list SET flag = "{flag}" WHERE url = "{url}"'.format(flag=flag,url=fin_url))
        url = i[4]
        #df = pd.read_csv(url,error_bad_lines = False)
        try:
            df = pd.read_csv(url)
        except:
            df = pd.read_csv(url,encoding = 'unicode_escape')
        df.head()
        df = df.sort_values(by=["Disclosure"],ascending = False)
        for j in df.columns:
            df = df.rename(columns={j:j.replace(' ','')})
        for j in df.columns:
            df = df.rename(columns={j: j.replace('\t', '')})
        df.to_csv('{}.csv'.format(i[1]))
        print('update '+'{}.csv'.format(i[1]))
        con = pymysql.connect(host='sh-cynosdbmysql-grp-gt91zapg.sql.tencentcdb.com', port=26963, user='root',
                              password='!abc123456', db='data_center')
        cur1 = con.cursor()
        cur1.execute('UPDATE url_list SET lastupdate = "{update}",flag = "1" WHERE url = "{url}"'.format(update=update, url=fin_url))
        con.commit()