let cards = [
    new GradedCard(1958, 'Topps', '1958 Topps', 62, 'Jim Brown', 'PSA', '4', '67733031', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/132113359/TyLJOT5i7ka5C-qOUAjc-w.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/132113359/9Lz9EJNkUU-0ut5gtBhkeg.jpg', true),
    new GradedCard(1963, 'Fleer', '1963 Fleer', '', 'Checklist 1-66', 'PSA', '5', '69683152', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162925/rhz8nxNC_EG5HFJZW6L6PQ.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162925/kMfM2yjrjE2q0AJNQU2OCA.jpg', false),
    new GradedCard(1964, 'Topps', '1964 Topps', 125, 'Pete Rose', 'PSA', '5', '69683153', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162926/IGKIwryO9UGV5QIMbnzWPA.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162926/Oesmk-aEakO7OloQXa5yQA.jpg', true),
    new GradedCard(1964, 'Topps', '1964 Topps', 200, 'Sandy Koufax', 'PSA', '6', '69683154', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162927/fwKUq0ppJUuI8gFuTb8RYw.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162927/eDy2AmnvkkSEssUMz3XZoQ.jpg', true),
    new GradedCard(1965, 'Topps', '1965 Topps', 300, 'Sandy Koufax', 'PSA', '7', '69683155', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162928/9B6T1van80ywyrrCHCk-Ow.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162928/_elZEpRT0Ee-et4nv4LMkw.jpg', true),
    new GradedCard(1963, 'Fleer', '1963 Fleer', 42, 'Sandy Koufax', 'PSA', '7', '69683156', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162929/q3qD0HtaX06lU8JgGyMcFw.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162929/_IMzMlcTKUewWSio8Gr6RA.jpg', true),
    new GradedCard(1962, 'Topps', '1962 Topps', 387, 'Lou Brock', 'PSA', '4', '69683157', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162930/OOMfCzB6nkK03AvutcPlCw.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162930/sHsCZ_9Nak-tA0pSpcClVw.jpg', true),
    new GradedCard(1965, 'Topps', '1965 Topps', 250, 'Willie Mays', 'PSA', '6', '69683158', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162931/UquW7P2Yv0qrT3dULv41sg.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162931/YTk_a4fPJEqQEudsAlr8Lg.jpg', true),
    new GradedCard(1962, "Topps", "1962 Topps", 300, "Willie Mays", "PSA", "3", "69683159", "https://d1htnxwo4o0jhw.cloudfront.net/cert/134162932/YDq91NPUwEa4gAzIXy71gQ.jpg", "https://d1htnxwo4o0jhw.cloudfront.net/cert/134162932/-wgTRxmQHEq_PEsXR6bJyg.jpg", true),
    new GradedCard(1964, "Topps", "1964 Topps", 300, "Hank Aaron", "PSA", "6", "69683160", "https://d1htnxwo4o0jhw.cloudfront.net/cert/134162933/W1YNDuSZ4kCtneOsLSyNyA.jpg", "https://d1htnxwo4o0jhw.cloudfront.net/cert/134162933/QyxG4H7ZSUWSRbJk4Jk44Q.jpg", true),
    new GradedCard(1962, "Topps", "1962 Topps", 318, "The Switch Hitter Connects", "PSA", "6", "69683161", "https://d1htnxwo4o0jhw.cloudfront.net/cert/134162934/LYxsr2xPE0eQcMO-AFzTHQ.jpg", "https://d1htnxwo4o0jhw.cloudfront.net/cert/134162934/QrXbTbdwQ0KblnE_3NSNUA.jpg", false),
    new GradedCard(1956, "Topps", "1956 Topps", 135, "Mickey Mantle", "SGC", "2.5", "1174031", "https://sgcimagprodstorage.blob.core.windows.net/mycollections/6313b7ee-6887-4e10-9a28-dc9fa2312278/h275/front/6313b7ee-6887-4e10-9a28-dc9fa2312278.jpg", "https://sgcimagprodstorage.blob.core.windows.net/mycollections/6313b7ee-6887-4e10-9a28-dc9fa2312278/h275/back/6313b7ee-6887-4e10-9a28-dc9fa2312278.jpg", false),
    new GradedCard(1956, "Topps", "1956 Topps", 30, "Jackie Robinson", "SGC", "1", "8812288", "https://sgcimagprodstorage.blob.core.windows.net/mycollections/aa187650-58c8-439d-b5f9-7ba8457af61a/h275/front/aa187650-58c8-439d-b5f9-7ba8457af61a.jpg", "https://sgcimagprodstorage.blob.core.windows.net/mycollections/aa187650-58c8-439d-b5f9-7ba8457af61a/h275/back/aa187650-58c8-439d-b5f9-7ba8457af61a.jpg", false),
    new GradedCard(1955, 'Bowman', '1955 Bowman', 202, 'Mickey Mantle', 'SGC', "1", "4442682", 'https://sgcimagprodstorage.blob.core.windows.net/mycollections/dd43a6ef-c50a-4ad3-88af-575f21a03142/h275/front/dd43a6ef-c50a-4ad3-88af-575f21a03142.jpg', 'https://sgcimagprodstorage.blob.core.windows.net/mycollections/dd43a6ef-c50a-4ad3-88af-575f21a03142/h275/back/dd43a6ef-c50a-4ad3-88af-575f21a03142.jpg', false),
    new GradedCard(1958, 'Topps', '1958 Topps', 47, 'Roger Maris', 'PSA', "1.5 (MK)", "72534948", 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446360/YU8hHyg9Z0m49bsWRemSXg.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446360/cMjlWU322kieoPm_owgc7g.jpg', true),
    new GradedCard(1958, 'Topps', '1958 Topps', 30, 'Hank Aaron', 'PSA', "1 (MK)", "72534949", 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446361/cJ6We9_SfEmFSISdMTssIw.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446361/y54LD6OAZEelN-JNEiVjmw.jpg', false),
    new GradedCard(1959, 'Topps', '1959 Topps', 478, 'Roberto Clemente', 'PSA', "2", "72534950", 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446362/15FYHM0-ukymzbgb09oP-Q.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446362/UI0mVy_mSU6d4xdEkVqtag.jpg', false),
    new GradedCard(1960, 'Topps', '1960 Topps', 148, 'CARL YASTRZEMSKI', 'PSA', "3", "72534951", 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446363/R7WcoLRl4k-h5IjNDAsrWQ.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446363/fOrBqxRqTkmnniH-6carMg.jpg', false),
    new GradedCard(1960, 'Topps', '1960 Topps', 343, 'Sandy Koufax', 'PSA', "3", "72534952", 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446364/SJ1bNlAH00CMJ080TeS-MQ.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446364/0UrUHjY7kUWVgiXRxQsM2g.jpg', true),
    new GradedCard(1960, 'Topps', '1960 Topps', 564, 'Willie Mays', 'PSA', "3", "72534953", 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446365/FkKtHDsJBk2mfGK6GctJig.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446365/XkLOc9hYu0qrtF-eHkLxlw.jpg', false),
    new GradedCard(1961, 'Topps', '1961 Topps', 300, 'Mickey Mantle', 'PSA', "3 (MC)", "72534954", 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446366/STeu1Gdnh06PNrEG1Dm_AA.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446366/VD5QGkiT0Eay-f2p2VQsiQ.jpg', false),
    new GradedCard(1961, 'Topps', '1961 Topps', 344, 'Sandy Koufax', 'PSA', "4", "72534955", 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446367/CleY7dW8XUuEV4hWgSUS3A.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446367/zrbaq5W3rkCm4_QeX4FguQ.jpg', false),
    new GradedCard(1961, 'Topps', '1961 Topps', 287, 'CARL YASTRZEMSKI', 'PSA', "4", "72534956", 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446368/czo3oXzgl02gy7QHdOUulw.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446368/SG_d9arjZUy8y-hVUA-Kpw.jpg', false),
    new GradedCard(1960, 'Fleer', '1960 Fleer', 72, 'Ted Williams', 'PSA', "7", "72534957", 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446369/6_uztP9B-kipz3AJSmv9LQ.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446369/jcYMMRd-x06G1Zyp_BU7FQ.jpg', false),
    new GradedCard(1962, 'Topps', '1962 Topps', 320, 'Hank Aaron', 'PSA', "5", "72534958", 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446370/5hVWFSoANUeTK7QQogq04w.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446370/mJfkJS7b1E-RRDEnUtEpAw.jpg', false),
    new GradedCard(1962, 'Topps', '1962 Topps', 10, 'Roberto Clemente', 'PSA', "5", "72534959", 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446371/MLtz7X9eT0aTnvOPPkeYsA.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446371/qYyLPo5GnEmcXHWjCeazSg.jpg', false),
    new GradedCard(1962, 'Topps', '1962 Topps', 10, 'Roberto Clemente', 'PSA', "4", "72534960", 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446372/hEYOOLYmLkuz2sgXAgP5zQ.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446372/Qgw8tNvsJEKfYFjmy8FcoA.jpg', false),
    new GradedCard(1962, 'Topps', '1962 Topps', 18, `Manager's Dream`, 'PSA', "3", "72534961", 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446373/-m-sJckphUORl8ItsKd18w.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446373/l6WZNtPP0kiSCLzcT6kRag.jpg', false),
    new GradedCard(1962, 'Topps', '1962 Topps', 18, `Manager's Dream`, 'PSA', "4", "72534962", 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446374/k0mLBhsSF0G0CAlrmfUo-A.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446374/TI74145xSECxI6n0Z0udZA.jpg', false),
    new GradedCard(1962, 'Topps', '1962 Topps', 401, `AL & NL Homer Kings`, 'PSA', "6", "72534963", 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446375/75sMVRaKW0af7Mt3rHNQng.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446375/7IVp-cuLOUmV5Bhh2RaORA.jpg', false),
    new GradedCard(1963, 'Fleer', '1963 Fleer', 5, `Willie Mays`, 'PSA', "6", "72534964", 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446376/qyXG8L7cDE2LUEof69-fvw.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446376/9rBXsCJlrUqKkF8HNroQ1g.jpg', false),
    new GradedCard(1963, 'Fleer', '1963 Fleer', 56, `Roberto Clemente`, 'PSA', "7", "72534965", 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446377/IBh4Y8GbVUO9umy9DioPqg.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446377/_a6UhG6QgUuKVZz8hUYnzQ.jpg', true),
    new GradedCard(1963, 'Fleer', '1963 Fleer', 56, `Roberto Clemente`, 'PSA', "6", "72534966", 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446378/6gdwul_kN0u23XnmunV2_g.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446378/XykwREsTxkeRf3KXxNUHog.jpg', false),
    new GradedCard(1963, 'Fleer', '1963 Fleer', 56, `Roberto Clemente`, 'PSA', "4", "72534967", 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446379/3nTTq4DWS0CUadnVtuZEKg.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446379/oC2Lsddps0WPFk7x4Vx4ig.jpg', true),
    new GradedCard(1963, 'Fleer', '1963 Fleer', 56, `Roberto Clemente`, 'PSA', "4", "72534968", 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446380/_RAqrT7vIEau5IoXmYPfYg.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446380/J0KRo0o2OESVpgbYl0tTaw.jpg', false),
    new GradedCard(1963, 'Topps', '1963 Topps', 210, `Sandy Koufax`, 'PSA', "6", "72534969", 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446381/l7F6FSoib0qZsf5W6APF3Q.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446381/PSb9ijhV0EienhcjyM3sWQ.jpg', true),
    new GradedCard(1963, 'Topps', '1963 Topps', 210, `Sandy Koufax`, 'PSA', "7", "72534970", 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446382/ySKDy9D5P0C3W0wewAwBWA.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446382/FVsyHWHb7kKGEnvbK9RLnw.jpg', true),
    new GradedCard(1963, 'Topps', '1963 Topps', 138, `Pride Of N.L.`, 'PSA', "6", "72534971", 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446383/t_Zt-mGsjkGX1iwKYer6Bg.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446383/2KChSoFBWke8W-PLHCmgEQ.jpg', false),
    new GradedCard(1963, 'Jell-O', '1963 Jell-O Hand Cut', 15, `Mickey Mantle`, 'PSA', "5", "72534972", 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446384/4j1XORrdAEuxCJ_TcEPp7A.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446384/1btfELvSrkeOMD91rNtC7g.jpg', false),
    new GradedCard(1964, 'Topps', '1964 Topps', 225, 'Roger Maris', 'PSA', "7", "72534973", 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446385/5TQL7t-uSkWNk_yY3cdmyA.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446385/rALfjUd08EW-f0cltKAzhg.jpg', true),
    new GradedCard(1964, 'Topps', '1964 Topps', 541, 'Phil Roof/Phil Niekro', 'PSA', "6", "72534974", 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446386/R_KpThzPek6bNGG7HZZKWw.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/138446386/5emsGmchXE-Ki32mEWYiIA.jpg', false)
];