SELECT 'user', 'project', 'career'
UNION ALL
SELECT * FROM profile
  INTO OUTFILE './exportdata/profile_dump.csv'
  FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"'
  LINES TERMINATED BY '\n'
;
