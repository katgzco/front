{
	"info": {
		"_postman_id": "029fd1be-edda-4185-baa5-adbfdd79e18d",
		"name": "Kushki",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "Buy_API",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "api-key",
						"value": "nzoTanOZgnIFG#ni8&!vGh8JD",
						"type": "text"
					},
					{
						"key": "accept",
						"value": "application/json",
						"type": "text"
					},
					{
						"key": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"office_number\": \"434343\",\n  \"register_number\": \"3232342\",\n  \"user_id\": 1233\n}"
				},
				"url": {
					"raw": "https://kushki-co-api-buy-ctls-dev-g7m25ztakq-uc.a.run.app/buy/",
					"protocol": "https",
					"host": [
						"kushki-co-api-buy-ctls-dev-g7m25ztakq-uc",
						"a",
						"run",
						"app"
					],
					"path": [
						"buy",
						""
					],
					"query": [
						{
							"key": "",
							"value": "",
							"disabled": true
						},
						{
							"key": "",
							"value": "",
							"disabled": true
						},
						{
							"key": "",
							"value": "",
							"disabled": true
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Query_All_API",
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "api-key",
						"value": "LFO9suZQU5b89OrZpuzEhPnI#",
						"type": "text"
					},
					{
						"key": "accept",
						"value": "application/json",
						"type": "text"
					}
				],
				"url": {
					"raw": "https://kushki-co-api-ctls-purchased-records-query-g7m25ztakq-uc.a.run.app/query/",
					"protocol": "https",
					"host": [
						"kushki-co-api-ctls-purchased-records-query-g7m25ztakq-uc",
						"a",
						"run",
						"app"
					],
					"path": [
						"query",
						""
					]
				}
			},
			"response": []
		},
		{
			"name": "Query_By_User_API",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "api-key",
						"value": "LFO9suZQU5b89OrZpuzEhPnI#",
						"type": "text"
					},
					{
						"key": "accept",
						"value": "application/json",
						"type": "text"
					},
					{
						"key": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "123",
					"options": {
						"raw": {
							"language": "text"
						}
					}
				},
				"url": {
					"raw": "https://kushki-co-api-ctls-purchased-records-query-g7m25ztakq-uc.a.run.app/query_by_id/",
					"protocol": "https",
					"host": [
						"kushki-co-api-ctls-purchased-records-query-g7m25ztakq-uc",
						"a",
						"run",
						"app"
					],
					"path": [
						"query_by_id",
						""
					]
				}
			},
			"response": []
		},
		{
			"name": "Kushki-search",
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "api-key",
						"value": "Xd*SPlBMgsiYdwnb.IRE4w^J4mKo8X8iy0X",
						"type": "text"
					},
					{
						"key": "accept",
						"value": "application/json",
						"type": "text"
					}
				],
				"url": {
					"raw": "https://kushki-search-ctl-api-develop-g7m25ztakq-uc.a.run.app/ctl_info_by_registration/040-252926",
					"protocol": "https",
					"host": [
						"kushki-search-ctl-api-develop-g7m25ztakq-uc",
						"a",
						"run",
						"app"
					],
					"path": [
						"ctl_info_by_registration",
						"040-252926"
					]
				}
			},
			"response": []
		}
	]
}