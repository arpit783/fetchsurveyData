const admin = require("firebase-admin");
const serviceAccount = {
  "type": "service_account",
  "project_id": "stated-choice-survey",
  "private_key_id": "2b590f1036907339b930e7e9bd0ba28c2c71a9b0",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCzXCjKQHUstnmn\nqRhZuF4vThKRQXi5+7SCSKZrbUyJ0b0MXVZGJj53YZ5ilbcVUI5UlANqYhRUisAv\n9dcnjs5XlIjZvj/iKy6dz/m3SKzhO+IjPhlyQajOKSl4Xz+nayZS0wtRHkLNraqU\nGopBhoWuXsKUrjZx4t0eJKd04ZYeiFlQS7ZrZHws8qikzIU1NYZC2LHF6bp9fyjq\nTYGmYx+lW1PbkKqFeRUIHbUIwOtlkNufzsP/YttIfXKEeHH1snqIqueZsraFUe5C\n1mcMmopL6b7F6XtdvYqJ713DsR8WQIaOZYzj6Gq5TTBadi9GRUlgtHqOEodFLBI5\nOVxYD/2hAgMBAAECggEABx7/l5gbjtzn05pJFzbUtngZEJ9S1b+CmTGdOeKrCUXE\nhbsm874M+NxtV2iuTjBWllESGaUvPXQM0VqnYjCvTJbfIBYHn0krnqRlO7us8XxZ\nLCEJDZpBw32q4daWRmVgriUm69+Rs2zTuvGaz6Mxp4ynmROZocfqE4pNA7z5Itkh\n8JMbBkTY6KWH0eJm3a283rXaqq6FqxiOM0v6cnORjE4iJF4aVDcZrRGbBlIETczO\ngcfxWAvibTJIazTFzDAw+zcRbXIKRzJraW64n/CeWxgQ1VLL7lIpHZePXebGzxA8\nj7RTD3aNwQ1MRUB1i5qhqrMoC4+jAm4LFMowJz3rgQKBgQDoROselQ3G76VoDj2j\nfpY6JvHv3KFeluPNo5HjItMjqcRqezFWxy+Rlb9WDcnO73hA5cYdqkc6fhfIcmoh\nG6YxBgRrVDdB7vcf5SbUXn6S2erNH3Qidryr3/RCo+lHIEPtx9LUqFzirTnIEAyt\nBzDaQzvdk7ti7wojxEwY1UgTWQKBgQDFr2HQLO5Nly7nT7LRLTdZDUTgKVAyBqic\nB1rVLJZ6UpgMWj+UDm3tSxXAyH0/gTPs62EWGY/fprYujFSpTfKXfYeHb9ctoLcI\nOzzZc/BzcJO15Ef3Y/HGF4QpWD1xdWRVF45QwGdnBz/xx68WaMcsrAy1gPaq6/gR\nNBBkn+VbiQKBgALlQQ0bjJVrTWOTsd8E5/iHncKAvJ5CQUrB/EKZn4o1RpaRPJc5\nWnV1KXJ4L4jd4WDlvGeIROUMx10fWAVbo+G+knWIEjxHL1t9btN87hUElHHEL51y\nX33BB/mAs5rIYzBmqlEuXCITSMIeuRm7GjfOWMO1YMOl+Tli7BPvLLvZAoGBALQD\nFpDYuU/SYZWlD3JHOGVRHez58dr8EUGzuNTxuz08RNTKwaZy1UsF2pMoflT7tGsD\nk+7p7Ad+6drNUrKxFj04w9di0pDsDn/iYXCqkMSuOPOjIp12V01JUMHNZnYQrgKG\nZsPF0OMSyPnEGf3P/78AFLqa6wONyODxhhP7PoHxAoGATkoZWtjza9WIoP0L+cTB\nOgsrb5HHFFU3HD7JzP7OJeF6l8zazfwi3dkq1MDxMLTlhNpd4NWgnhAa7A/06SNV\npJw37JWpqsxl+0hVABG3YkU9dyHv7qTDL+Ue3+Xs6JZ3fihmhVmMNlx9wXUg/d8z\nQENIydP3ll4FuvNahEj40K4=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-2rbqt@stated-choice-survey.iam.gserviceaccount.com",
  "client_id": "113188369775349088846",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-2rbqt%40stated-choice-survey.iam.gserviceaccount.com"
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const fs = require("fs");
const db = admin.firestore();

const fetchFunction = async()=>{
  try{
    var obj = {
       table: []
    };

    obj.table.push({block: '-',
      vehicleType: '-',
      wheels: '-',
      genderOther: '-',
      type1: '-',
      parkingType: '-',
      occupation: '-',
      frequencyOther: '-',
      fourWheelerOwned: '-',
      gender: '-',
      educationalQualification: '-',
      purposeOther: '-',
      type5: '-',
      parkingSystem: '-',
      badWeather3: '-',
      badWeather2: '-',
      badWeather1: '-',
      ageGroup: '-',
      show: '-',
      tripLength: '-',
      ignoredFactor: '-',
      occupationOther: '-',
      destination: '-',
      origin: '-',
      cycleOwned: '-',
      frequency: '-',
      badWeather5: '-',
      badWeather4: '-',
      monthlyIncome: '-',
      type3: '-',
      type2: '-',
      type4: '-',
      purpose: '-',
      twoWheelerOwned: '-',
      parkingCost: '-'});

    var json = JSON.stringify(obj);

    var fs = require('fs');
    fs.writeFile('surveyResponses.json', json, 'utf8', function writeFileCallback(err){
      if(err) throw err;
      console.log('file created');
    });

    fs.readFile('surveyResponses.json', 'utf8', async function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        obj = JSON.parse(data);
        const docs = await db.collection('surveyResponse').get();
        docs.forEach(doc=>{
          obj.table.push(doc.data());
        })
        json = JSON.stringify(obj);
        fs.writeFile('surveyResponses.json', json, 'utf8', function(err){
          if(err) throw err;
          console.log('file updated');
        });
    }});
  } catch(error){
    console.log(error);
  }
}

fetchFunction();
