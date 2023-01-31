BEGIN TRANSACTION;
CREATE TABLE crick__c (
	id INTEGER NOT NULL, 
	"Name" VARCHAR(255), 
	"Number__c" VARCHAR(255), 
	PRIMARY KEY (id)
);
INSERT INTO "crick__c" VALUES(1,'huui','8989');
INSERT INTO "crick__c" VALUES(2,'lallq','4455');
INSERT INTO "crick__c" VALUES(3,'lallqnjdoiujAO','899899');
COMMIT;
