---
title: Analytics API v1
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="analytics-api">Analytics API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Includes all API endpoints for data analytics.

Base URLs:

* <a href="http://localhost:7101">http://localhost:7101</a>

# Authentication

* API Key (Bearer)
    - Parameter Name: **Authorization**, in: header. e.g Bearer Api_Key.

Requests to the Airslip API are authenticated using the applications `Api_Key`. You can view and manage your credentials in the Airslip Dashboard.

An Api_Key provides connectivity to all authenticated Airslip API endpoints, so it is important to keep these credentials secure. Do not share your Api_Key in publicly accessible areas such as GitHub, client-side code, or easily accessible configuration settings.

Authentication is performed using Bearer Authentication. Your Api_Key should be sent as the token.

All requests should be made via HTTPS.

<h1 id="analytics-api-accounts">Accounts</h1>

A description for a group of APIs

## Get Accounts

<a id="opIdGet Accounts"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://localhost:7101/v1/balance/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
POST http://localhost:7101/v1/balance/search HTTP/1.1
Host: localhost:7101
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "ownerEntityId": "string",
  "ownerAirslipUserType": "Unknown",
  "page": 0,
  "recordsPerPage": 0,
  "sort": [
    {
      "field": "string",
      "sort": "Asc"
    }
  ],
  "search": {
    "items": [
      {
        "columnField": "string",
        "value": null,
        "operatorValue": "string"
      }
    ],
    "linkOperator": "string"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('http://localhost:7101/v1/balance/search',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'API_KEY'
}

result = RestClient.post 'http://localhost:7101/v1/balance/search',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.post('http://localhost:7101/v1/balance/search', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost:7101/v1/balance/search', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:7101/v1/balance/search");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:7101/v1/balance/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v1/balance/search`

*A description about a specific API should go here*

> Body parameter

```json
{
  "ownerEntityId": "string",
  "ownerAirslipUserType": "Unknown",
  "page": 0,
  "recordsPerPage": 0,
  "sort": [
    {
      "field": "string",
      "sort": "Asc"
    }
  ],
  "search": {
    "items": [
      {
        "columnField": "string",
        "value": null,
        "operatorValue": "string"
      }
    ],
    "linkOperator": "string"
  }
}
```

<h3 id="get-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OwnedDataSearchModel](#schemaowneddatasearchmodel)|false|A parameter description should go here|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "id": "string",
      "integrationProviderId": "string",
      "accountStatus": "Active",
      "sortCode": "string",
      "accountNumber": "string",
      "currencyCode": "string",
      "balance": 0,
      "updatedOn": "2019-08-24T14:15:22Z"
    }
  ],
  "paging": {
    "totalRecords": 0,
    "recordsPerPage": 0,
    "page": 0,
    "next": {
      "page": 0,
      "recordsPerPage": 0,
      "sort": [
        {
          "field": "string",
          "sort": "Asc"
        }
      ],
      "search": {
        "items": [
          {
            "columnField": "string",
            "value": null,
            "operatorValue": "string"
          }
        ],
        "linkOperator": "string"
      }
    }
  }
}
```

<h3 id="get-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[AccountBalanceReportModelEntitySearchResponse](#schemaaccountbalancereportmodelentitysearchresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Download Account Balances

<a id="opIdDownload Account Balances"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://localhost:7101/v1/balance/download \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
POST http://localhost:7101/v1/balance/download HTTP/1.1
Host: localhost:7101
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "ownerEntityId": "string",
  "ownerAirslipUserType": "Unknown",
  "page": 0,
  "recordsPerPage": 0,
  "sort": [
    {
      "field": "string",
      "sort": "Asc"
    }
  ],
  "search": {
    "items": [
      {
        "columnField": "string",
        "value": null,
        "operatorValue": "string"
      }
    ],
    "linkOperator": "string"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('http://localhost:7101/v1/balance/download',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'API_KEY'
}

result = RestClient.post 'http://localhost:7101/v1/balance/download',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.post('http://localhost:7101/v1/balance/download', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost:7101/v1/balance/download', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:7101/v1/balance/download");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:7101/v1/balance/download", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v1/balance/download`

*A description about a specific API should go here*

> Body parameter

```json
{
  "ownerEntityId": "string",
  "ownerAirslipUserType": "Unknown",
  "page": 0,
  "recordsPerPage": 0,
  "sort": [
    {
      "field": "string",
      "sort": "Asc"
    }
  ],
  "search": {
    "items": [
      {
        "columnField": "string",
        "value": null,
        "operatorValue": "string"
      }
    ],
    "linkOperator": "string"
  }
}
```

<h3 id="download-account-balances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OwnedDataSearchModel](#schemaowneddatasearchmodel)|false|A parameter description should go here|

> Example responses

> 200 Response

```json
{
  "fileName": "string",
  "fileContent": "string",
  "mediaType": "string"
}
```

<h3 id="download-account-balances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DownloadResponse](#schemadownloadresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="analytics-api-banktransactions">BankTransactions</h1>

A description for a group of APIs

## Get Bank Transactions

<a id="opIdGet Bank Transactions"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://localhost:7101/v1/bank-transactions/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
POST http://localhost:7101/v1/bank-transactions/search HTTP/1.1
Host: localhost:7101
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "ownerEntityId": "string",
  "ownerAirslipUserType": "Unknown",
  "page": 0,
  "recordsPerPage": 0,
  "sort": [
    {
      "field": "string",
      "sort": "Asc"
    }
  ],
  "search": {
    "items": [
      {
        "columnField": "string",
        "value": null,
        "operatorValue": "string"
      }
    ],
    "linkOperator": "string"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('http://localhost:7101/v1/bank-transactions/search',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'API_KEY'
}

result = RestClient.post 'http://localhost:7101/v1/bank-transactions/search',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.post('http://localhost:7101/v1/bank-transactions/search', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost:7101/v1/bank-transactions/search', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:7101/v1/bank-transactions/search");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:7101/v1/bank-transactions/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v1/bank-transactions/search`

*A description about a specific API should go here*

> Body parameter

```json
{
  "ownerEntityId": "string",
  "ownerAirslipUserType": "Unknown",
  "page": 0,
  "recordsPerPage": 0,
  "sort": [
    {
      "field": "string",
      "sort": "Asc"
    }
  ],
  "search": {
    "items": [
      {
        "columnField": "string",
        "value": null,
        "operatorValue": "string"
      }
    ],
    "linkOperator": "string"
  }
}
```

<h3 id="get-bank-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OwnedDataSearchModel](#schemaowneddatasearchmodel)|false|A parameter description should go here|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "bankTransactions": {
        "id": "string",
        "userId": "string",
        "entityId": "string",
        "airslipUserType": "Unknown",
        "integrationId": "string",
        "bankTransactionId": "string",
        "transactionHash": "string",
        "bankId": "string",
        "emailAddress": "string",
        "authorisedDate": 0,
        "capturedDate": 0,
        "amount": 0,
        "currencyCode": "string",
        "description": "string",
        "addressLine": "string",
        "lastCardDigits": "string",
        "isoFamilyCode": "string",
        "proprietaryCode": "string",
        "transactionIdentifier": "string",
        "reference": "string",
        "dataSource": "Yapily",
        "timeStamp": 0,
        "year": 0,
        "month": 0,
        "day": 0,
        "traceInfo": "string"
      }
    }
  ],
  "paging": {
    "totalRecords": 0,
    "recordsPerPage": 0,
    "page": 0,
    "next": {
      "page": 0,
      "recordsPerPage": 0,
      "sort": [
        {
          "field": "string",
          "sort": "Asc"
        }
      ],
      "search": {
        "items": [
          {
            "columnField": "string",
            "value": null,
            "operatorValue": "string"
          }
        ],
        "linkOperator": "string"
      }
    }
  }
}
```

<h3 id="get-bank-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[BankTransactionsResponseEntitySearchResponse](#schemabanktransactionsresponseentitysearchresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get Bank Transaction

<a id="opIdGet Bank Transaction"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:7101/v1/bank-transactions/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
GET http://localhost:7101/v1/bank-transactions/{id} HTTP/1.1
Host: localhost:7101
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('http://localhost:7101/v1/bank-transactions/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'API_KEY'
}

result = RestClient.get 'http://localhost:7101/v1/bank-transactions/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.get('http://localhost:7101/v1/bank-transactions/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:7101/v1/bank-transactions/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:7101/v1/bank-transactions/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:7101/v1/bank-transactions/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v1/bank-transactions/{id}`

*A description about a specific API should go here*

<h3 id="get-bank-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "4873a037963341e0b5f9de6b8260b8b2",
  "entityStatus": 0,
  "userId": null,
  "entityId": null,
  "airslipUserType": "Unknown",
  "integrationId": "",
  "bankTransactionId": "",
  "transactionHash": null,
  "bankId": "",
  "emailAddress": "",
  "authorisedDate": null,
  "capturedDate": 0,
  "amount": 0,
  "currencyCode": null,
  "description": "",
  "addressLine": null,
  "lastCardDigits": null,
  "isoFamilyCode": null,
  "proprietaryCode": null,
  "transactionIdentifier": null,
  "reference": null,
  "dataSource": "Unknown",
  "timeStamp": 1650894459678,
  "year": null,
  "month": null,
  "day": null,
  "traceInfo": "Id: 4873a037963341e0b5f9de6b8260b8b2, EntityId: , AirslipUserType: Unknown, IntegrationId: "
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "message": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "string"
    }
  ]
}
```

<h3 id="get-bank-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[BankTransactionResponse](#schemabanktransactionresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="analytics-api-commerce">Commerce</h1>

A description for a group of APIs

## Get Commerce Accounts

<a id="opIdGet Commerce Accounts"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://localhost:7101/v1/commerce/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
POST http://localhost:7101/v1/commerce/search HTTP/1.1
Host: localhost:7101
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "ownerEntityId": "string",
  "ownerAirslipUserType": "Unknown",
  "page": 0,
  "recordsPerPage": 0,
  "sort": [
    {
      "field": "string",
      "sort": "Asc"
    }
  ],
  "search": {
    "items": [
      {
        "columnField": "string",
        "value": null,
        "operatorValue": "string"
      }
    ],
    "linkOperator": "string"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('http://localhost:7101/v1/commerce/search',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'API_KEY'
}

result = RestClient.post 'http://localhost:7101/v1/commerce/search',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.post('http://localhost:7101/v1/commerce/search', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost:7101/v1/commerce/search', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:7101/v1/commerce/search");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:7101/v1/commerce/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v1/commerce/search`

*A description about a specific API should go here*

> Body parameter

```json
{
  "ownerEntityId": "string",
  "ownerAirslipUserType": "Unknown",
  "page": 0,
  "recordsPerPage": 0,
  "sort": [
    {
      "field": "string",
      "sort": "Asc"
    }
  ],
  "search": {
    "items": [
      {
        "columnField": "string",
        "value": null,
        "operatorValue": "string"
      }
    ],
    "linkOperator": "string"
  }
}
```

<h3 id="get-commerce-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OwnedDataSearchModel](#schemaowneddatasearchmodel)|false|A parameter description should go here|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "id": "string",
      "integrationProviderId": "string",
      "authenticationState": "NotAuthenticated",
      "name": "string",
      "timeStamp": 0
    }
  ],
  "paging": {
    "totalRecords": 0,
    "recordsPerPage": 0,
    "page": 0,
    "next": {
      "page": 0,
      "recordsPerPage": 0,
      "sort": [
        {
          "field": "string",
          "sort": "Asc"
        }
      ],
      "search": {
        "items": [
          {
            "columnField": "string",
            "value": null,
            "operatorValue": "string"
          }
        ],
        "linkOperator": "string"
      }
    }
  }
}
```

<h3 id="get-commerce-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[CommerceProviderModelEntitySearchResponse](#schemacommerceprovidermodelentitysearchresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Download Commerce Accounts

<a id="opIdDownload Commerce Accounts"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://localhost:7101/v1/commerce/download \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
POST http://localhost:7101/v1/commerce/download HTTP/1.1
Host: localhost:7101
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "ownerEntityId": "string",
  "ownerAirslipUserType": "Unknown",
  "page": 0,
  "recordsPerPage": 0,
  "sort": [
    {
      "field": "string",
      "sort": "Asc"
    }
  ],
  "search": {
    "items": [
      {
        "columnField": "string",
        "value": null,
        "operatorValue": "string"
      }
    ],
    "linkOperator": "string"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('http://localhost:7101/v1/commerce/download',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'API_KEY'
}

result = RestClient.post 'http://localhost:7101/v1/commerce/download',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.post('http://localhost:7101/v1/commerce/download', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost:7101/v1/commerce/download', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:7101/v1/commerce/download");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:7101/v1/commerce/download", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v1/commerce/download`

*A description about a specific API should go here*

> Body parameter

```json
{
  "ownerEntityId": "string",
  "ownerAirslipUserType": "Unknown",
  "page": 0,
  "recordsPerPage": 0,
  "sort": [
    {
      "field": "string",
      "sort": "Asc"
    }
  ],
  "search": {
    "items": [
      {
        "columnField": "string",
        "value": null,
        "operatorValue": "string"
      }
    ],
    "linkOperator": "string"
  }
}
```

<h3 id="download-commerce-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OwnedDataSearchModel](#schemaowneddatasearchmodel)|false|A parameter description should go here|

> Example responses

> 200 Response

```json
{
  "fileName": "string",
  "fileContent": "string",
  "mediaType": "string"
}
```

<h3 id="download-commerce-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DownloadResponse](#schemadownloadresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="analytics-api-report">Report</h1>

A description for a group of APIs

## Get Bank Transactions Report

<a id="opIdGet Bank Transactions Report"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://localhost:7101/v1/reports/bank-transactions \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
POST http://localhost:7101/v1/reports/bank-transactions HTTP/1.1
Host: localhost:7101
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "ownerEntityId": "string",
  "ownerAirslipUserType": "Unknown",
  "page": 0,
  "recordsPerPage": 0,
  "sort": [
    {
      "field": "string",
      "sort": "Asc"
    }
  ],
  "search": {
    "items": [
      {
        "columnField": "string",
        "value": null,
        "operatorValue": "string"
      }
    ],
    "linkOperator": "string"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('http://localhost:7101/v1/reports/bank-transactions',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'API_KEY'
}

result = RestClient.post 'http://localhost:7101/v1/reports/bank-transactions',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.post('http://localhost:7101/v1/reports/bank-transactions', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost:7101/v1/reports/bank-transactions', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:7101/v1/reports/bank-transactions");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:7101/v1/reports/bank-transactions", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v1/reports/bank-transactions`

*A description about a specific API should go here*

> Body parameter

```json
{
  "ownerEntityId": "string",
  "ownerAirslipUserType": "Unknown",
  "page": 0,
  "recordsPerPage": 0,
  "sort": [
    {
      "field": "string",
      "sort": "Asc"
    }
  ],
  "search": {
    "items": [
      {
        "columnField": "string",
        "value": null,
        "operatorValue": "string"
      }
    ],
    "linkOperator": "string"
  }
}
```

<h3 id="get-bank-transactions-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OwnedDataSearchModel](#schemaowneddatasearchmodel)|false|A parameter description should go here|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "id": "string",
      "bankTransactionId": "string",
      "transactionHash": "string",
      "integrationId": "string",
      "bankId": "string",
      "emailAddress": "string",
      "authorisedDate": 0,
      "capturedDate": 0,
      "amount": 0,
      "currencyCode": "string",
      "description": "string",
      "addressLine": "string",
      "lastCardDigits": "string",
      "isoFamilyCode": "string",
      "proprietaryCode": "string",
      "transactionIdentifier": "string",
      "reference": "string",
      "dataSource": "Yapily",
      "timeStamp": 0,
      "year": 0,
      "month": 0,
      "day": 0,
      "tradingName": "string"
    }
  ],
  "paging": {
    "totalRecords": 0,
    "recordsPerPage": 0,
    "page": 0,
    "next": {
      "page": 0,
      "recordsPerPage": 0,
      "sort": [
        {
          "field": "string",
          "sort": "Asc"
        }
      ],
      "search": {
        "items": [
          {
            "columnField": "string",
            "value": null,
            "operatorValue": "string"
          }
        ],
        "linkOperator": "string"
      }
    }
  }
}
```

<h3 id="get-bank-transactions-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[BankTransactionReportModelEntitySearchResponse](#schemabanktransactionreportmodelentitysearchresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Download Bank Transactions

<a id="opIdDownload Bank Transactions"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://localhost:7101/v1/reports/bank-transactions/download \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
POST http://localhost:7101/v1/reports/bank-transactions/download HTTP/1.1
Host: localhost:7101
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "ownerEntityId": "string",
  "ownerAirslipUserType": "Unknown",
  "page": 0,
  "recordsPerPage": 0,
  "sort": [
    {
      "field": "string",
      "sort": "Asc"
    }
  ],
  "search": {
    "items": [
      {
        "columnField": "string",
        "value": null,
        "operatorValue": "string"
      }
    ],
    "linkOperator": "string"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('http://localhost:7101/v1/reports/bank-transactions/download',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'API_KEY'
}

result = RestClient.post 'http://localhost:7101/v1/reports/bank-transactions/download',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.post('http://localhost:7101/v1/reports/bank-transactions/download', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost:7101/v1/reports/bank-transactions/download', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:7101/v1/reports/bank-transactions/download");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:7101/v1/reports/bank-transactions/download", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v1/reports/bank-transactions/download`

*A description about a specific API should go here*

> Body parameter

```json
{
  "ownerEntityId": "string",
  "ownerAirslipUserType": "Unknown",
  "page": 0,
  "recordsPerPage": 0,
  "sort": [
    {
      "field": "string",
      "sort": "Asc"
    }
  ],
  "search": {
    "items": [
      {
        "columnField": "string",
        "value": null,
        "operatorValue": "string"
      }
    ],
    "linkOperator": "string"
  }
}
```

<h3 id="download-bank-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OwnedDataSearchModel](#schemaowneddatasearchmodel)|false|A parameter description should go here|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "id": "string",
      "bankTransactionId": "string",
      "transactionHash": "string",
      "integrationId": "string",
      "bankId": "string",
      "emailAddress": "string",
      "authorisedDate": 0,
      "capturedDate": 0,
      "amount": 0,
      "currencyCode": "string",
      "description": "string",
      "addressLine": "string",
      "lastCardDigits": "string",
      "isoFamilyCode": "string",
      "proprietaryCode": "string",
      "transactionIdentifier": "string",
      "reference": "string",
      "dataSource": "Yapily",
      "timeStamp": 0,
      "year": 0,
      "month": 0,
      "day": 0,
      "tradingName": "string"
    }
  ],
  "paging": {
    "totalRecords": 0,
    "recordsPerPage": 0,
    "page": 0,
    "next": {
      "page": 0,
      "recordsPerPage": 0,
      "sort": [
        {
          "field": "string",
          "sort": "Asc"
        }
      ],
      "search": {
        "items": [
          {
            "columnField": "string",
            "value": null,
            "operatorValue": "string"
          }
        ],
        "linkOperator": "string"
      }
    }
  }
}
```

<h3 id="download-bank-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[BankTransactionReportModelEntitySearchResponse](#schemabanktransactionreportmodelentitysearchresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Commerce Transactions

<a id="opIdCommerce Transactions"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://localhost:7101/v1/reports/commerce-transactions \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
POST http://localhost:7101/v1/reports/commerce-transactions HTTP/1.1
Host: localhost:7101
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "ownerEntityId": "string",
  "ownerAirslipUserType": "Unknown",
  "page": 0,
  "recordsPerPage": 0,
  "sort": [
    {
      "field": "string",
      "sort": "Asc"
    }
  ],
  "search": {
    "items": [
      {
        "columnField": "string",
        "value": null,
        "operatorValue": "string"
      }
    ],
    "linkOperator": "string"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('http://localhost:7101/v1/reports/commerce-transactions',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'API_KEY'
}

result = RestClient.post 'http://localhost:7101/v1/reports/commerce-transactions',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.post('http://localhost:7101/v1/reports/commerce-transactions', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost:7101/v1/reports/commerce-transactions', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:7101/v1/reports/commerce-transactions");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:7101/v1/reports/commerce-transactions", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v1/reports/commerce-transactions`

*A description about a specific API should go here*

> Body parameter

```json
{
  "ownerEntityId": "string",
  "ownerAirslipUserType": "Unknown",
  "page": 0,
  "recordsPerPage": 0,
  "sort": [
    {
      "field": "string",
      "sort": "Asc"
    }
  ],
  "search": {
    "items": [
      {
        "columnField": "string",
        "value": null,
        "operatorValue": "string"
      }
    ],
    "linkOperator": "string"
  }
}
```

<h3 id="commerce-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OwnedDataSearchModel](#schemaowneddatasearchmodel)|false|A parameter description should go here|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "id": "string",
      "dataSource": "Yapily",
      "timeStamp": 0,
      "trackingId": "string",
      "internalId": "string",
      "source": "string",
      "transactionNumber": "string",
      "refundCode": "string",
      "datetime": "2019-08-24T14:15:22Z",
      "storeLocationId": "string",
      "storeAddress": "string",
      "onlinePurchase": true,
      "subtotal": 0,
      "serviceCharge": 0,
      "total": 0,
      "currencyCode": "string",
      "customerEmail": "string",
      "operatorName": "string",
      "date": "2019-08-24T14:15:22Z",
      "time": "string",
      "till": "string",
      "number": "string",
      "store": "string",
      "description": "string",
      "year": 0,
      "month": 0,
      "day": 0,
      "totalRefund": 0,
      "orderStatus": "string",
      "paymentStatus": "string"
    }
  ],
  "paging": {
    "totalRecords": 0,
    "recordsPerPage": 0,
    "page": 0,
    "next": {
      "page": 0,
      "recordsPerPage": 0,
      "sort": [
        {
          "field": "string",
          "sort": "Asc"
        }
      ],
      "search": {
        "items": [
          {
            "columnField": "string",
            "value": null,
            "operatorValue": "string"
          }
        ],
        "linkOperator": "string"
      }
    }
  }
}
```

<h3 id="commerce-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[CommerceTransactionReportModelEntitySearchResponse](#schemacommercetransactionreportmodelentitysearchresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Commerce Transactions Download

<a id="opIdCommerce Transactions Download"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://localhost:7101/v1/reports/commerce-transactions/download \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
POST http://localhost:7101/v1/reports/commerce-transactions/download HTTP/1.1
Host: localhost:7101
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "ownerEntityId": "string",
  "ownerAirslipUserType": "Unknown",
  "page": 0,
  "recordsPerPage": 0,
  "sort": [
    {
      "field": "string",
      "sort": "Asc"
    }
  ],
  "search": {
    "items": [
      {
        "columnField": "string",
        "value": null,
        "operatorValue": "string"
      }
    ],
    "linkOperator": "string"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('http://localhost:7101/v1/reports/commerce-transactions/download',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'API_KEY'
}

result = RestClient.post 'http://localhost:7101/v1/reports/commerce-transactions/download',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.post('http://localhost:7101/v1/reports/commerce-transactions/download', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost:7101/v1/reports/commerce-transactions/download', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:7101/v1/reports/commerce-transactions/download");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:7101/v1/reports/commerce-transactions/download", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v1/reports/commerce-transactions/download`

*A description about a specific API should go here*

> Body parameter

```json
{
  "ownerEntityId": "string",
  "ownerAirslipUserType": "Unknown",
  "page": 0,
  "recordsPerPage": 0,
  "sort": [
    {
      "field": "string",
      "sort": "Asc"
    }
  ],
  "search": {
    "items": [
      {
        "columnField": "string",
        "value": null,
        "operatorValue": "string"
      }
    ],
    "linkOperator": "string"
  }
}
```

<h3 id="commerce-transactions-download-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OwnedDataSearchModel](#schemaowneddatasearchmodel)|false|A parameter description should go here|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "id": "string",
      "bankTransactionId": "string",
      "transactionHash": "string",
      "integrationId": "string",
      "bankId": "string",
      "emailAddress": "string",
      "authorisedDate": 0,
      "capturedDate": 0,
      "amount": 0,
      "currencyCode": "string",
      "description": "string",
      "addressLine": "string",
      "lastCardDigits": "string",
      "isoFamilyCode": "string",
      "proprietaryCode": "string",
      "transactionIdentifier": "string",
      "reference": "string",
      "dataSource": "Yapily",
      "timeStamp": 0,
      "year": 0,
      "month": 0,
      "day": 0,
      "tradingName": "string"
    }
  ],
  "paging": {
    "totalRecords": 0,
    "recordsPerPage": 0,
    "page": 0,
    "next": {
      "page": 0,
      "recordsPerPage": 0,
      "sort": [
        {
          "field": "string",
          "sort": "Asc"
        }
      ],
      "search": {
        "items": [
          {
            "columnField": "string",
            "value": null,
            "operatorValue": "string"
          }
        ],
        "linkOperator": "string"
      }
    }
  }
}
```

<h3 id="commerce-transactions-download-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[BankTransactionReportModelEntitySearchResponse](#schemabanktransactionreportmodelentitysearchresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="analytics-api-snapshot">Snapshot</h1>

A description for a group of APIs

## Get Snapshot

<a id="opIdGet Snapshot"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://localhost:7101/v1/snapshot/{snapshotType} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
POST http://localhost:7101/v1/snapshot/{snapshotType} HTTP/1.1
Host: localhost:7101
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "ownerEntityId": "string",
  "ownerAirslipUserType": "Unknown"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('http://localhost:7101/v1/snapshot/{snapshotType}',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'API_KEY'
}

result = RestClient.post 'http://localhost:7101/v1/snapshot/{snapshotType}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.post('http://localhost:7101/v1/snapshot/{snapshotType}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost:7101/v1/snapshot/{snapshotType}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:7101/v1/snapshot/{snapshotType}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:7101/v1/snapshot/{snapshotType}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v1/snapshot/{snapshotType}`

*A description about a specific API should go here*

> Body parameter

```json
{
  "ownerEntityId": "string",
  "ownerAirslipUserType": "Unknown"
}
```

<h3 id="get-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|snapshotType|path|[DashboardSnapshotType](#schemadashboardsnapshottype)|true|A parameter description should go here|
|dayRange|query|integer(int32)|false|A parameter description should go here|
|statRange|query|integer(int32)|false|A parameter description should go here|
|integrationId|query|string|false|A parameter description should go here|
|body|body|[OwnedSnapshotSearchModel](#schemaownedsnapshotsearchmodel)|false|A parameter description should go here|

#### Enumerated Values

|Parameter|Value|
|---|---|
|snapshotType|TotalSales|
|snapshotType|TotalRefunds|
|snapshotType|CurrentBalance|

> Example responses

> 200 Response

```json
{
  "balance": 2,
  "timeStamp": 1650894459694,
  "movement": 0.02,
  "metrics": [
    {
      "timeStamp": 1650894459694,
      "balance": 25.3
    }
  ],
  "dayRange": 1
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "message": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "string"
    }
  ]
}
```

<h3 id="get-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DashboardSnapshotModel](#schemadashboardsnapshotmodel)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get Revenue

<a id="opIdGet Revenue"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://localhost:7101/v1/snapshot/revenue \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
POST http://localhost:7101/v1/snapshot/revenue HTTP/1.1
Host: localhost:7101
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "startDate": "string",
  "endDate": "string",
  "integrationId": "string",
  "ownerEntityId": "string",
  "ownerAirslipUserType": "Unknown"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('http://localhost:7101/v1/snapshot/revenue',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'API_KEY'
}

result = RestClient.post 'http://localhost:7101/v1/snapshot/revenue',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.post('http://localhost:7101/v1/snapshot/revenue', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost:7101/v1/snapshot/revenue', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:7101/v1/snapshot/revenue");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:7101/v1/snapshot/revenue", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v1/snapshot/revenue`

*A description about a specific API should go here*

> Body parameter

```json
{
  "startDate": "string",
  "endDate": "string",
  "integrationId": "string",
  "ownerEntityId": "string",
  "ownerAirslipUserType": "Unknown"
}
```

<h3 id="get-revenue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OwnedSeriesSearchModel](#schemaownedseriessearchmodel)|false|A parameter description should go here|

> Example responses

> 200 Response

```json
{
  "startDate": "string",
  "endDate": "string",
  "series": [
    {
      "name": "string",
      "metrics": [
        {
          "period": 0,
          "description": "string",
          "balance": 0,
          "periodType": "Minute"
        }
      ],
      "data": [
        0
      ]
    }
  ]
}
```

<h3 id="get-revenue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DashboardGraphSeriesModel](#schemadashboardgraphseriesmodel)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get Cashflow

<a id="opIdGet Cashflow"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://localhost:7101/v1/snapshot/cashflow \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
POST http://localhost:7101/v1/snapshot/cashflow HTTP/1.1
Host: localhost:7101
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "startDate": "string",
  "endDate": "string",
  "integrationId": "string",
  "ownerEntityId": "string",
  "ownerAirslipUserType": "Unknown"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('http://localhost:7101/v1/snapshot/cashflow',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'API_KEY'
}

result = RestClient.post 'http://localhost:7101/v1/snapshot/cashflow',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.post('http://localhost:7101/v1/snapshot/cashflow', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost:7101/v1/snapshot/cashflow', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:7101/v1/snapshot/cashflow");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:7101/v1/snapshot/cashflow", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v1/snapshot/cashflow`

*A description about a specific API should go here*

> Body parameter

```json
{
  "startDate": "string",
  "endDate": "string",
  "integrationId": "string",
  "ownerEntityId": "string",
  "ownerAirslipUserType": "Unknown"
}
```

<h3 id="get-cashflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OwnedSeriesSearchModel](#schemaownedseriessearchmodel)|false|A parameter description should go here|

> Example responses

> 200 Response

```json
{
  "startDate": "string",
  "endDate": "string",
  "series": [
    {
      "name": "string",
      "metrics": [
        {
          "period": 0,
          "description": "string",
          "balance": 0,
          "periodType": "Minute"
        }
      ],
      "data": [
        0
      ]
    }
  ]
}
```

<h3 id="get-cashflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DashboardGraphSeriesModel](#schemadashboardgraphseriesmodel)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

# Schemas

<h2 id="tocS_AccountBalanceReportModel">AccountBalanceReportModel</h2>
<!-- backwards compatibility -->
<a id="schemaaccountbalancereportmodel"></a>
<a id="schema_AccountBalanceReportModel"></a>
<a id="tocSaccountbalancereportmodel"></a>
<a id="tocsaccountbalancereportmodel"></a>

```json
{
  "id": "string",
  "integrationProviderId": "string",
  "accountStatus": "Active",
  "sortCode": "string",
  "accountNumber": "string",
  "currencyCode": "string",
  "balance": 0,
  "updatedOn": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string¦null|false|none|none|
|integrationProviderId|string|true|none|none|
|accountStatus|[BankingAccountStatus](#schemabankingaccountstatus)|true|none|none|
|sortCode|string¦null|false|none|none|
|accountNumber|string¦null|false|none|none|
|currencyCode|string|true|none|none|
|balance|number(double)|true|none|none|
|updatedOn|string(date-time)|true|none|none|

<h2 id="tocS_AccountBalanceReportModelEntitySearchResponse">AccountBalanceReportModelEntitySearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccountbalancereportmodelentitysearchresponse"></a>
<a id="schema_AccountBalanceReportModelEntitySearchResponse"></a>
<a id="tocSaccountbalancereportmodelentitysearchresponse"></a>
<a id="tocsaccountbalancereportmodelentitysearchresponse"></a>

```json
{
  "results": [
    {
      "id": "string",
      "integrationProviderId": "string",
      "accountStatus": "Active",
      "sortCode": "string",
      "accountNumber": "string",
      "currencyCode": "string",
      "balance": 0,
      "updatedOn": "2019-08-24T14:15:22Z"
    }
  ],
  "paging": {
    "totalRecords": 0,
    "recordsPerPage": 0,
    "page": 0,
    "next": {
      "page": 0,
      "recordsPerPage": 0,
      "sort": [
        {
          "field": "string",
          "sort": "Asc"
        }
      ],
      "search": {
        "items": [
          {
            "columnField": "string",
            "value": null,
            "operatorValue": "string"
          }
        ],
        "linkOperator": "string"
      }
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[AccountBalanceReportModel](#schemaaccountbalancereportmodel)]|true|none|none|
|paging|[EntitySearchPagingModel](#schemaentitysearchpagingmodel)|true|none|none|

<h2 id="tocS_AirslipUserType">AirslipUserType</h2>
<!-- backwards compatibility -->
<a id="schemaairslipusertype"></a>
<a id="schema_AirslipUserType"></a>
<a id="tocSairslipusertype"></a>
<a id="tocsairslipusertype"></a>

```json
"Unknown"

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|Unknown|
|*anonymous*|Standard|
|*anonymous*|Merchant|
|*anonymous*|Unregistered|
|*anonymous*|Partner|
|*anonymous*|Administrator|
|*anonymous*|InternalApi|

<h2 id="tocS_AuthenticationState">AuthenticationState</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationstate"></a>
<a id="schema_AuthenticationState"></a>
<a id="tocSauthenticationstate"></a>
<a id="tocsauthenticationstate"></a>

```json
"NotAuthenticated"

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|NotAuthenticated|
|*anonymous*|Authenticating|
|*anonymous*|Authenticated|

<h2 id="tocS_BankTransactionReportModel">BankTransactionReportModel</h2>
<!-- backwards compatibility -->
<a id="schemabanktransactionreportmodel"></a>
<a id="schema_BankTransactionReportModel"></a>
<a id="tocSbanktransactionreportmodel"></a>
<a id="tocsbanktransactionreportmodel"></a>

```json
{
  "id": "string",
  "bankTransactionId": "string",
  "transactionHash": "string",
  "integrationId": "string",
  "bankId": "string",
  "emailAddress": "string",
  "authorisedDate": 0,
  "capturedDate": 0,
  "amount": 0,
  "currencyCode": "string",
  "description": "string",
  "addressLine": "string",
  "lastCardDigits": "string",
  "isoFamilyCode": "string",
  "proprietaryCode": "string",
  "transactionIdentifier": "string",
  "reference": "string",
  "dataSource": "Yapily",
  "timeStamp": 0,
  "year": 0,
  "month": 0,
  "day": 0,
  "tradingName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string¦null|false|none|none|
|bankTransactionId|string|true|none|none|
|transactionHash|string¦null|false|none|none|
|integrationId|string|true|none|none|
|bankId|string|true|none|none|
|emailAddress|string|true|none|none|
|authorisedDate|integer(int64)¦null|false|none|none|
|capturedDate|integer(int64)|true|none|none|
|amount|integer(int64)|true|none|none|
|currencyCode|string¦null|false|none|none|
|description|string|true|none|none|
|addressLine|string¦null|false|none|none|
|lastCardDigits|string¦null|false|none|none|
|isoFamilyCode|string¦null|false|none|none|
|proprietaryCode|string¦null|false|none|none|
|transactionIdentifier|string¦null|false|none|none|
|reference|string¦null|false|none|none|
|dataSource|[DataSources](#schemadatasources)|true|none|none|
|timeStamp|integer(int64)|true|none|none|
|year|integer(int32)¦null|false|none|none|
|month|integer(int32)¦null|false|none|none|
|day|integer(int32)¦null|false|none|none|
|tradingName|string|true|none|none|

<h2 id="tocS_BankTransactionReportModelEntitySearchResponse">BankTransactionReportModelEntitySearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemabanktransactionreportmodelentitysearchresponse"></a>
<a id="schema_BankTransactionReportModelEntitySearchResponse"></a>
<a id="tocSbanktransactionreportmodelentitysearchresponse"></a>
<a id="tocsbanktransactionreportmodelentitysearchresponse"></a>

```json
{
  "results": [
    {
      "id": "string",
      "bankTransactionId": "string",
      "transactionHash": "string",
      "integrationId": "string",
      "bankId": "string",
      "emailAddress": "string",
      "authorisedDate": 0,
      "capturedDate": 0,
      "amount": 0,
      "currencyCode": "string",
      "description": "string",
      "addressLine": "string",
      "lastCardDigits": "string",
      "isoFamilyCode": "string",
      "proprietaryCode": "string",
      "transactionIdentifier": "string",
      "reference": "string",
      "dataSource": "Yapily",
      "timeStamp": 0,
      "year": 0,
      "month": 0,
      "day": 0,
      "tradingName": "string"
    }
  ],
  "paging": {
    "totalRecords": 0,
    "recordsPerPage": 0,
    "page": 0,
    "next": {
      "page": 0,
      "recordsPerPage": 0,
      "sort": [
        {
          "field": "string",
          "sort": "Asc"
        }
      ],
      "search": {
        "items": [
          {
            "columnField": "string",
            "value": null,
            "operatorValue": "string"
          }
        ],
        "linkOperator": "string"
      }
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[BankTransactionReportModel](#schemabanktransactionreportmodel)]|true|none|none|
|paging|[EntitySearchPagingModel](#schemaentitysearchpagingmodel)|true|none|none|

<h2 id="tocS_BankTransactionResponse">BankTransactionResponse</h2>
<!-- backwards compatibility -->
<a id="schemabanktransactionresponse"></a>
<a id="schema_BankTransactionResponse"></a>
<a id="tocSbanktransactionresponse"></a>
<a id="tocsbanktransactionresponse"></a>

```json
{
  "id": "string",
  "userId": "string",
  "entityId": "string",
  "airslipUserType": "Unknown",
  "integrationId": "string",
  "bankTransactionId": "string",
  "transactionHash": "string",
  "bankId": "string",
  "emailAddress": "string",
  "authorisedDate": 0,
  "capturedDate": 0,
  "amount": 0,
  "currencyCode": "string",
  "description": "string",
  "addressLine": "string",
  "lastCardDigits": "string",
  "isoFamilyCode": "string",
  "proprietaryCode": "string",
  "transactionIdentifier": "string",
  "reference": "string",
  "dataSource": "Yapily",
  "timeStamp": 0,
  "year": 0,
  "month": 0,
  "day": 0,
  "traceInfo": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string¦null|false|none|none|
|userId|string¦null|false|none|none|
|entityId|string¦null|false|none|none|
|airslipUserType|[AirslipUserType](#schemaairslipusertype)|true|none|none|
|integrationId|string|true|none|none|
|bankTransactionId|string|true|none|none|
|transactionHash|string¦null|false|none|none|
|bankId|string|true|none|none|
|emailAddress|string|true|none|none|
|authorisedDate|integer(int64)¦null|false|none|none|
|capturedDate|integer(int64)|true|none|none|
|amount|integer(int64)|true|none|none|
|currencyCode|string¦null|false|none|none|
|description|string|true|none|none|
|addressLine|string¦null|false|none|none|
|lastCardDigits|string¦null|false|none|none|
|isoFamilyCode|string¦null|false|none|none|
|proprietaryCode|string¦null|false|none|none|
|transactionIdentifier|string¦null|false|none|none|
|reference|string¦null|false|none|none|
|dataSource|[DataSources](#schemadatasources)|true|none|none|
|timeStamp|integer(int64)|true|none|none|
|year|integer(int32)¦null|false|none|none|
|month|integer(int32)¦null|false|none|none|
|day|integer(int32)¦null|false|none|none|
|traceInfo|string|true|read-only|none|

<h2 id="tocS_BankTransactionsResponse">BankTransactionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemabanktransactionsresponse"></a>
<a id="schema_BankTransactionsResponse"></a>
<a id="tocSbanktransactionsresponse"></a>
<a id="tocsbanktransactionsresponse"></a>

```json
{
  "bankTransactions": {
    "id": "string",
    "userId": "string",
    "entityId": "string",
    "airslipUserType": "Unknown",
    "integrationId": "string",
    "bankTransactionId": "string",
    "transactionHash": "string",
    "bankId": "string",
    "emailAddress": "string",
    "authorisedDate": 0,
    "capturedDate": 0,
    "amount": 0,
    "currencyCode": "string",
    "description": "string",
    "addressLine": "string",
    "lastCardDigits": "string",
    "isoFamilyCode": "string",
    "proprietaryCode": "string",
    "transactionIdentifier": "string",
    "reference": "string",
    "dataSource": "Yapily",
    "timeStamp": 0,
    "year": 0,
    "month": 0,
    "day": 0,
    "traceInfo": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bankTransactions|[BankTransactionResponse](#schemabanktransactionresponse)|true|none|none|

<h2 id="tocS_BankTransactionsResponseEntitySearchResponse">BankTransactionsResponseEntitySearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemabanktransactionsresponseentitysearchresponse"></a>
<a id="schema_BankTransactionsResponseEntitySearchResponse"></a>
<a id="tocSbanktransactionsresponseentitysearchresponse"></a>
<a id="tocsbanktransactionsresponseentitysearchresponse"></a>

```json
{
  "results": [
    {
      "bankTransactions": {
        "id": "string",
        "userId": "string",
        "entityId": "string",
        "airslipUserType": "Unknown",
        "integrationId": "string",
        "bankTransactionId": "string",
        "transactionHash": "string",
        "bankId": "string",
        "emailAddress": "string",
        "authorisedDate": 0,
        "capturedDate": 0,
        "amount": 0,
        "currencyCode": "string",
        "description": "string",
        "addressLine": "string",
        "lastCardDigits": "string",
        "isoFamilyCode": "string",
        "proprietaryCode": "string",
        "transactionIdentifier": "string",
        "reference": "string",
        "dataSource": "Yapily",
        "timeStamp": 0,
        "year": 0,
        "month": 0,
        "day": 0,
        "traceInfo": "string"
      }
    }
  ],
  "paging": {
    "totalRecords": 0,
    "recordsPerPage": 0,
    "page": 0,
    "next": {
      "page": 0,
      "recordsPerPage": 0,
      "sort": [
        {
          "field": "string",
          "sort": "Asc"
        }
      ],
      "search": {
        "items": [
          {
            "columnField": "string",
            "value": null,
            "operatorValue": "string"
          }
        ],
        "linkOperator": "string"
      }
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[BankTransactionsResponse](#schemabanktransactionsresponse)]|true|none|none|
|paging|[EntitySearchPagingModel](#schemaentitysearchpagingmodel)|true|none|none|

<h2 id="tocS_BankingAccountStatus">BankingAccountStatus</h2>
<!-- backwards compatibility -->
<a id="schemabankingaccountstatus"></a>
<a id="schema_BankingAccountStatus"></a>
<a id="tocSbankingaccountstatus"></a>
<a id="tocsbankingaccountstatus"></a>

```json
"Active"

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|Active|
|*anonymous*|Expired|

<h2 id="tocS_CommerceProviderModel">CommerceProviderModel</h2>
<!-- backwards compatibility -->
<a id="schemacommerceprovidermodel"></a>
<a id="schema_CommerceProviderModel"></a>
<a id="tocScommerceprovidermodel"></a>
<a id="tocscommerceprovidermodel"></a>

```json
{
  "id": "string",
  "integrationProviderId": "string",
  "authenticationState": "NotAuthenticated",
  "name": "string",
  "timeStamp": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string¦null|false|none|none|
|integrationProviderId|string|true|none|none|
|authenticationState|[AuthenticationState](#schemaauthenticationstate)|true|none|none|
|name|string|true|none|none|
|timeStamp|integer(int64)|true|none|none|

<h2 id="tocS_CommerceProviderModelEntitySearchResponse">CommerceProviderModelEntitySearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemacommerceprovidermodelentitysearchresponse"></a>
<a id="schema_CommerceProviderModelEntitySearchResponse"></a>
<a id="tocScommerceprovidermodelentitysearchresponse"></a>
<a id="tocscommerceprovidermodelentitysearchresponse"></a>

```json
{
  "results": [
    {
      "id": "string",
      "integrationProviderId": "string",
      "authenticationState": "NotAuthenticated",
      "name": "string",
      "timeStamp": 0
    }
  ],
  "paging": {
    "totalRecords": 0,
    "recordsPerPage": 0,
    "page": 0,
    "next": {
      "page": 0,
      "recordsPerPage": 0,
      "sort": [
        {
          "field": "string",
          "sort": "Asc"
        }
      ],
      "search": {
        "items": [
          {
            "columnField": "string",
            "value": null,
            "operatorValue": "string"
          }
        ],
        "linkOperator": "string"
      }
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[CommerceProviderModel](#schemacommerceprovidermodel)]|true|none|none|
|paging|[EntitySearchPagingModel](#schemaentitysearchpagingmodel)|true|none|none|

<h2 id="tocS_CommerceTransactionReportModel">CommerceTransactionReportModel</h2>
<!-- backwards compatibility -->
<a id="schemacommercetransactionreportmodel"></a>
<a id="schema_CommerceTransactionReportModel"></a>
<a id="tocScommercetransactionreportmodel"></a>
<a id="tocscommercetransactionreportmodel"></a>

```json
{
  "id": "string",
  "dataSource": "Yapily",
  "timeStamp": 0,
  "trackingId": "string",
  "internalId": "string",
  "source": "string",
  "transactionNumber": "string",
  "refundCode": "string",
  "datetime": "2019-08-24T14:15:22Z",
  "storeLocationId": "string",
  "storeAddress": "string",
  "onlinePurchase": true,
  "subtotal": 0,
  "serviceCharge": 0,
  "total": 0,
  "currencyCode": "string",
  "customerEmail": "string",
  "operatorName": "string",
  "date": "2019-08-24T14:15:22Z",
  "time": "string",
  "till": "string",
  "number": "string",
  "store": "string",
  "description": "string",
  "year": 0,
  "month": 0,
  "day": 0,
  "totalRefund": 0,
  "orderStatus": "string",
  "paymentStatus": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string¦null|false|none|none|
|dataSource|[DataSources](#schemadatasources)|true|none|none|
|timeStamp|integer(int64)|true|none|none|
|trackingId|string|true|none|none|
|internalId|string¦null|false|none|none|
|source|string¦null|false|none|none|
|transactionNumber|string¦null|false|none|none|
|refundCode|string¦null|false|none|none|
|datetime|string(date-time)¦null|false|none|none|
|storeLocationId|string¦null|false|none|none|
|storeAddress|string¦null|false|none|none|
|onlinePurchase|boolean¦null|false|none|none|
|subtotal|integer(int64)¦null|false|none|none|
|serviceCharge|integer(int64)¦null|false|none|none|
|total|integer(int64)¦null|false|none|none|
|currencyCode|string¦null|false|none|none|
|customerEmail|string¦null|false|none|none|
|operatorName|string¦null|false|none|none|
|date|string(date-time)¦null|false|none|none|
|time|string¦null|false|none|none|
|till|string¦null|false|none|none|
|number|string¦null|false|none|none|
|store|string¦null|false|none|none|
|description|string¦null|false|none|none|
|year|integer(int32)¦null|false|none|none|
|month|integer(int32)¦null|false|none|none|
|day|integer(int32)¦null|false|none|none|
|totalRefund|integer(int64)¦null|false|none|none|
|orderStatus|string|true|none|none|
|paymentStatus|string|true|none|none|

<h2 id="tocS_CommerceTransactionReportModelEntitySearchResponse">CommerceTransactionReportModelEntitySearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemacommercetransactionreportmodelentitysearchresponse"></a>
<a id="schema_CommerceTransactionReportModelEntitySearchResponse"></a>
<a id="tocScommercetransactionreportmodelentitysearchresponse"></a>
<a id="tocscommercetransactionreportmodelentitysearchresponse"></a>

```json
{
  "results": [
    {
      "id": "string",
      "dataSource": "Yapily",
      "timeStamp": 0,
      "trackingId": "string",
      "internalId": "string",
      "source": "string",
      "transactionNumber": "string",
      "refundCode": "string",
      "datetime": "2019-08-24T14:15:22Z",
      "storeLocationId": "string",
      "storeAddress": "string",
      "onlinePurchase": true,
      "subtotal": 0,
      "serviceCharge": 0,
      "total": 0,
      "currencyCode": "string",
      "customerEmail": "string",
      "operatorName": "string",
      "date": "2019-08-24T14:15:22Z",
      "time": "string",
      "till": "string",
      "number": "string",
      "store": "string",
      "description": "string",
      "year": 0,
      "month": 0,
      "day": 0,
      "totalRefund": 0,
      "orderStatus": "string",
      "paymentStatus": "string"
    }
  ],
  "paging": {
    "totalRecords": 0,
    "recordsPerPage": 0,
    "page": 0,
    "next": {
      "page": 0,
      "recordsPerPage": 0,
      "sort": [
        {
          "field": "string",
          "sort": "Asc"
        }
      ],
      "search": {
        "items": [
          {
            "columnField": "string",
            "value": null,
            "operatorValue": "string"
          }
        ],
        "linkOperator": "string"
      }
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[CommerceTransactionReportModel](#schemacommercetransactionreportmodel)]|true|none|none|
|paging|[EntitySearchPagingModel](#schemaentitysearchpagingmodel)|true|none|none|

<h2 id="tocS_DashboardGraphSeriesModel">DashboardGraphSeriesModel</h2>
<!-- backwards compatibility -->
<a id="schemadashboardgraphseriesmodel"></a>
<a id="schema_DashboardGraphSeriesModel"></a>
<a id="tocSdashboardgraphseriesmodel"></a>
<a id="tocsdashboardgraphseriesmodel"></a>

```json
{
  "startDate": "string",
  "endDate": "string",
  "series": [
    {
      "name": "string",
      "metrics": [
        {
          "period": 0,
          "description": "string",
          "balance": 0,
          "periodType": "Minute"
        }
      ],
      "data": [
        0
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|startDate|string|true|none|none|
|endDate|string|true|none|none|
|series|[[Series](#schemaseries)]|true|none|none|

<h2 id="tocS_DashboardSnapshotModel">DashboardSnapshotModel</h2>
<!-- backwards compatibility -->
<a id="schemadashboardsnapshotmodel"></a>
<a id="schema_DashboardSnapshotModel"></a>
<a id="tocSdashboardsnapshotmodel"></a>
<a id="tocsdashboardsnapshotmodel"></a>

```json
{
  "balance": 0,
  "timeStamp": 0,
  "movement": 0,
  "metrics": [
    {
      "timeStamp": 0,
      "balance": 0
    }
  ],
  "dayRange": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balance|number(double)|true|none|A description about the property should go here|
|timeStamp|integer(int64)|true|none|A description about the property should go here|
|movement|number(double)|true|none|A description about the property should go here|
|metrics|[[SnapshotMetric](#schemasnapshotmetric)]|true|none|A description about the property should go here|
|dayRange|integer(int32)|true|none|A description about the property should go here|

<h2 id="tocS_DashboardSnapshotType">DashboardSnapshotType</h2>
<!-- backwards compatibility -->
<a id="schemadashboardsnapshottype"></a>
<a id="schema_DashboardSnapshotType"></a>
<a id="tocSdashboardsnapshottype"></a>
<a id="tocsdashboardsnapshottype"></a>

```json
"TotalSales"

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|TotalSales|
|*anonymous*|TotalRefunds|
|*anonymous*|CurrentBalance|

<h2 id="tocS_DataSources">DataSources</h2>
<!-- backwards compatibility -->
<a id="schemadatasources"></a>
<a id="schema_DataSources"></a>
<a id="tocSdatasources"></a>
<a id="tocsdatasources"></a>

```json
"Yapily"

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|Yapily|
|*anonymous*|Api2Cart|
|*anonymous*|SwanRetail|
|*anonymous*|CustomerPortal|
|*anonymous*|Analytics|
|*anonymous*|QrMatching|
|*anonymous*|SmartReceipts|
|*anonymous*|MockData|
|*anonymous*|Unknown|

<h2 id="tocS_DownloadResponse">DownloadResponse</h2>
<!-- backwards compatibility -->
<a id="schemadownloadresponse"></a>
<a id="schema_DownloadResponse"></a>
<a id="tocSdownloadresponse"></a>
<a id="tocsdownloadresponse"></a>

```json
{
  "fileName": "string",
  "fileContent": "string",
  "mediaType": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileName|string|true|none|none|
|fileContent|string(byte)|true|none|none|
|mediaType|string|true|none|none|

<h2 id="tocS_EntitySearchModel">EntitySearchModel</h2>
<!-- backwards compatibility -->
<a id="schemaentitysearchmodel"></a>
<a id="schema_EntitySearchModel"></a>
<a id="tocSentitysearchmodel"></a>
<a id="tocsentitysearchmodel"></a>

```json
{
  "items": [
    {
      "columnField": "string",
      "value": null,
      "operatorValue": "string"
    }
  ],
  "linkOperator": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[SearchFilterModel](#schemasearchfiltermodel)]|true|none|none|
|linkOperator|string|true|none|none|

<h2 id="tocS_EntitySearchPagingModel">EntitySearchPagingModel</h2>
<!-- backwards compatibility -->
<a id="schemaentitysearchpagingmodel"></a>
<a id="schema_EntitySearchPagingModel"></a>
<a id="tocSentitysearchpagingmodel"></a>
<a id="tocsentitysearchpagingmodel"></a>

```json
{
  "totalRecords": 0,
  "recordsPerPage": 0,
  "page": 0,
  "next": {
    "page": 0,
    "recordsPerPage": 0,
    "sort": [
      {
        "field": "string",
        "sort": "Asc"
      }
    ],
    "search": {
      "items": [
        {
          "columnField": "string",
          "value": null,
          "operatorValue": "string"
        }
      ],
      "linkOperator": "string"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalRecords|integer(int32)¦null|false|none|none|
|recordsPerPage|integer(int32)¦null|false|none|none|
|page|integer(int32)|true|none|none|
|next|[EntitySearchQueryModel](#schemaentitysearchquerymodel)|true|none|none|

<h2 id="tocS_EntitySearchQueryModel">EntitySearchQueryModel</h2>
<!-- backwards compatibility -->
<a id="schemaentitysearchquerymodel"></a>
<a id="schema_EntitySearchQueryModel"></a>
<a id="tocSentitysearchquerymodel"></a>
<a id="tocsentitysearchquerymodel"></a>

```json
{
  "page": 0,
  "recordsPerPage": 0,
  "sort": [
    {
      "field": "string",
      "sort": "Asc"
    }
  ],
  "search": {
    "items": [
      {
        "columnField": "string",
        "value": null,
        "operatorValue": "string"
      }
    ],
    "linkOperator": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|integer(int32)|true|none|none|
|recordsPerPage|integer(int32)|true|none|none|
|sort|[[EntitySearchSortModel](#schemaentitysearchsortmodel)]|true|none|none|
|search|[EntitySearchModel](#schemaentitysearchmodel)|true|none|none|

<h2 id="tocS_EntitySearchSortModel">EntitySearchSortModel</h2>
<!-- backwards compatibility -->
<a id="schemaentitysearchsortmodel"></a>
<a id="schema_EntitySearchSortModel"></a>
<a id="tocSentitysearchsortmodel"></a>
<a id="tocsentitysearchsortmodel"></a>

```json
{
  "field": "string",
  "sort": "Asc"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|none|
|sort|[SortOrder](#schemasortorder)|true|none|none|

<h2 id="tocS_EntityStatus">EntityStatus</h2>
<!-- backwards compatibility -->
<a id="schemaentitystatus"></a>
<a id="schema_EntityStatus"></a>
<a id="tocSentitystatus"></a>
<a id="tocsentitystatus"></a>

```json
"Active"

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|Active|
|*anonymous*|Deleted|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "errorCode": "string",
  "message": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|string|true|none|none|
|message|string¦null|false|none|none|
|metadata|object|true|none|none|
|» **additionalProperties**|any|false|none|none|
|links|[[Link](#schemalink)]|true|none|none|

<h2 id="tocS_Link">Link</h2>
<!-- backwards compatibility -->
<a id="schemalink"></a>
<a id="schema_Link"></a>
<a id="tocSlink"></a>
<a id="tocslink"></a>

```json
{
  "href": "string",
  "rel": "string",
  "method": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|none|
|rel|string|true|none|none|
|method|string|true|none|none|

<h2 id="tocS_OwnedDataSearchModel">OwnedDataSearchModel</h2>
<!-- backwards compatibility -->
<a id="schemaowneddatasearchmodel"></a>
<a id="schema_OwnedDataSearchModel"></a>
<a id="tocSowneddatasearchmodel"></a>
<a id="tocsowneddatasearchmodel"></a>

```json
{
  "ownerEntityId": "string",
  "ownerAirslipUserType": "Unknown",
  "page": 0,
  "recordsPerPage": 0,
  "sort": [
    {
      "field": "string",
      "sort": "Asc"
    }
  ],
  "search": {
    "items": [
      {
        "columnField": "string",
        "value": null,
        "operatorValue": "string"
      }
    ],
    "linkOperator": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ownerEntityId|string|true|none|none|
|ownerAirslipUserType|[AirslipUserType](#schemaairslipusertype)|true|none|none|
|page|integer(int32)|true|none|none|
|recordsPerPage|integer(int32)|true|none|none|
|sort|[[EntitySearchSortModel](#schemaentitysearchsortmodel)]|true|none|none|
|search|[EntitySearchModel](#schemaentitysearchmodel)|true|none|none|

<h2 id="tocS_OwnedSeriesSearchModel">OwnedSeriesSearchModel</h2>
<!-- backwards compatibility -->
<a id="schemaownedseriessearchmodel"></a>
<a id="schema_OwnedSeriesSearchModel"></a>
<a id="tocSownedseriessearchmodel"></a>
<a id="tocsownedseriessearchmodel"></a>

```json
{
  "startDate": "string",
  "endDate": "string",
  "integrationId": "string",
  "ownerEntityId": "string",
  "ownerAirslipUserType": "Unknown"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|startDate|string|true|none|none|
|endDate|string|true|none|none|
|integrationId|string¦null|false|none|none|
|ownerEntityId|string|true|none|none|
|ownerAirslipUserType|[AirslipUserType](#schemaairslipusertype)|true|none|none|

<h2 id="tocS_OwnedSnapshotSearchModel">OwnedSnapshotSearchModel</h2>
<!-- backwards compatibility -->
<a id="schemaownedsnapshotsearchmodel"></a>
<a id="schema_OwnedSnapshotSearchModel"></a>
<a id="tocSownedsnapshotsearchmodel"></a>
<a id="tocsownedsnapshotsearchmodel"></a>

```json
{
  "ownerEntityId": "string",
  "ownerAirslipUserType": "Unknown"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ownerEntityId|string|true|none|none|
|ownerAirslipUserType|[AirslipUserType](#schemaairslipusertype)|true|none|none|

<h2 id="tocS_PeriodType">PeriodType</h2>
<!-- backwards compatibility -->
<a id="schemaperiodtype"></a>
<a id="schema_PeriodType"></a>
<a id="tocSperiodtype"></a>
<a id="tocsperiodtype"></a>

```json
"Minute"

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|Minute|
|*anonymous*|Hour|
|*anonymous*|Day|
|*anonymous*|Week|
|*anonymous*|Month|
|*anonymous*|Year|

<h2 id="tocS_SearchFilterModel">SearchFilterModel</h2>
<!-- backwards compatibility -->
<a id="schemasearchfiltermodel"></a>
<a id="schema_SearchFilterModel"></a>
<a id="tocSsearchfiltermodel"></a>
<a id="tocssearchfiltermodel"></a>

```json
{
  "columnField": "string",
  "value": null,
  "operatorValue": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columnField|string|true|none|none|
|value|any|false|none|none|
|operatorValue|string|true|none|none|

<h2 id="tocS_Series">Series</h2>
<!-- backwards compatibility -->
<a id="schemaseries"></a>
<a id="schema_Series"></a>
<a id="tocSseries"></a>
<a id="tocsseries"></a>

```json
{
  "name": "string",
  "metrics": [
    {
      "period": 0,
      "description": "string",
      "balance": 0,
      "periodType": "Minute"
    }
  ],
  "data": [
    0
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|metrics|[[TimelyMetric](#schematimelymetric)]|true|none|none|
|data|[number]|true|none|none|

<h2 id="tocS_SnapshotMetric">SnapshotMetric</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotmetric"></a>
<a id="schema_SnapshotMetric"></a>
<a id="tocSsnapshotmetric"></a>
<a id="tocssnapshotmetric"></a>

```json
{
  "timeStamp": 0,
  "balance": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeStamp|integer(int64)|true|none|none|
|balance|number(double)|true|none|none|

<h2 id="tocS_SortOrder">SortOrder</h2>
<!-- backwards compatibility -->
<a id="schemasortorder"></a>
<a id="schema_SortOrder"></a>
<a id="tocSsortorder"></a>
<a id="tocssortorder"></a>

```json
"Asc"

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|Asc|
|*anonymous*|Desc|

<h2 id="tocS_TimelyMetric">TimelyMetric</h2>
<!-- backwards compatibility -->
<a id="schematimelymetric"></a>
<a id="schema_TimelyMetric"></a>
<a id="tocStimelymetric"></a>
<a id="tocstimelymetric"></a>

```json
{
  "period": 0,
  "description": "string",
  "balance": 0,
  "periodType": "Minute"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|period|integer(int32)|true|none|none|
|description|string|true|none|none|
|balance|number(double)|true|none|none|
|periodType|[PeriodType](#schemaperiodtype)|true|none|none|

