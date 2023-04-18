import * as AWS from 'aws-sdk';

const config = {
    region: 'us-east-2',
    secretAccessKey: 'sYOdG4V/jrjE2qMpcXXMPn/TZZij/M0mkq7P22oJ',
    accessKeyId: 'AKIA4YP6PJWLNWNEVECW'
}

AWS.config.update(config);

const table = 'reservaciones';

const db = new AWS.DynamoDB.DocumentClient();

export const agregarReservacion = async (data) => {
    const params = {
        TableName: table,
        Item: data
    }

    const response = await db.put(params).promise()
    console.log(response.$response.httpResponse);
}
