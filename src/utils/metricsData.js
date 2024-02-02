const metricsData = {
    "success": true,
    "data": {
        "success": true,
        "data": [
            { 
                "id": "1fcaf35d-7b03-44d7-88d1-2992221bb799", 
                "metric": "TRANSFER_ERC20", 
                "metric_display_name": "Transfer ERC-20",
                "metric_description": "Transfers of a currency (ERC-20)",
                "metric_type": "SERIES",
                "api_endpoint": "${BLOCKCHAIN_API_URL}/query",
                "created_at": "2023-11-01T12:01:48.096Z",
                "updated_at": "2023-11-01T12:01:48.096Z",
                "operations": [
                    {
                        "id": "c500a3e0-7065-4ee8-8867-0c9884cf70c4",
                        "metric_id": "1fcaf35d-7b03-44d7-88d1-2992221bb799",
                        "field": "to_address",
                        "as": "total",
                        "distinct": true,
                        "operation": "COUNT",
                        "operation_name": "Unique Receivers",
                        "operation_description": "Count of unique receivers of transfer event logs",
                        "created_at": "2023-11-01T12:01:48.096Z",
                        "updated_at": "2023-11-01T12:01:48.096Z"
                    },
                    {
                        "id": "3014d60e-4719-46ce-a0b3-646dcaabda6c",
                        "metric_id": "1fcaf35d-7b03-44d7-88d1-2992221bb799",
                        "field": "from_address",
                        "as": "total",
                        "distinct": true,
                        "operation": "COUNT",
                        "operation_name": "Unique Senders",
                        "operation_description": "Count of unique senders of transfer event logs",
                        "created_at": "2023-11-01T12:01:48.096Z",
                        "updated_at": "2023-11-01T12:01:48.096Z"
                    },
                    {
                        "id": "126c6577-5a14-4c0d-91b6-99a8bf813aa1",
                        "metric_id": "1fcaf35d-7b03-44d7-88d1-2992221bb799",
                        "field": "volume",
                        "as": "total",
                        "distinct": false,
                        "operation": "MEDIAN",
                        "operation_name": "Median",
                        "operation_description": "Median of transfer event log volumes",
                        "created_at": "2023-11-01T12:01:48.096Z",
                        "updated_at": "2023-11-01T12:01:48.096Z"
                    },
                    {
                        "id": "ce810491-e44b-4baa-9727-b419adbe11b7",
                        "metric_id": "1fcaf35d-7b03-44d7-88d1-2992221bb799",
                        "field": "volume",
                        "as": "total",
                        "distinct": false,
                        "operation": "MAX",
                        "operation_name": "Maximum",
                        "operation_description": "Maximum of transfer event log volumes",
                        "created_at": "2023-11-01T12:01:48.096Z",
                        "updated_at": "2023-11-01T12:01:48.096Z"
                    },
                    {
                        "id": "0fd24351-44af-4671-a929-696f5fd73c8f",
                        "metric_id": "1fcaf35d-7b03-44d7-88d1-2992221bb799",
                        "field": "volume",
                        "as": "total",
                        "distinct": false,
                        "operation": "MIN",
                        "operation_name": "Minimum",
                        "operation_description": "Minimum of transfer event log volumes",
                        "created_at": "2023-11-01T12:01:48.096Z",
                        "updated_at": "2023-11-01T12:01:48.096Z"
                    },
                    {
                        "id": "a81f835f-84b1-4f8c-9d20-7bed70c2a2ce",
                        "metric_id": "1fcaf35d-7b03-44d7-88d1-2992221bb799",
                        "field": "volume",
                        "as": "total",
                        "distinct": false,
                        "operation": "AVG",
                        "operation_name": "Average",
                        "operation_description": "Average of transfer event log volumes",
                        "created_at": "2023-11-01T12:01:48.096Z",
                        "updated_at": "2023-11-01T12:01:48.096Z"
                    },
                    {
                        "id": "5c322ebf-f7a3-456f-9ebd-3f1b564d694e",
                        "metric_id": "1fcaf35d-7b03-44d7-88d1-2992221bb799",
                        "field": "volume",
                        "as": "total",
                        "distinct": false,
                        "operation": "SUM",
                        "operation_name": "Sum",
                        "operation_description": "Sum of transfer event log volumes",
                        "created_at": "2023-11-01T12:01:48.096Z",
                        "updated_at": "2023-11-01T12:01:48.096Z"
                    },
                    {
                        "id": "e8057471-aba8-404e-83af-0a70839efd18",
                        "metric_id": "1fcaf35d-7b03-44d7-88d1-2992221bb799",
                        "field": "volume",
                        "as": "total",
                        "distinct": false,
                        "operation": "COUNT",
                        "operation_name": "Count",
                        "operation_description": "Count of transfer event logs",
                        "created_at": "2023-11-01T12:01:48.096Z",
                        "updated_at": "2023-11-01T12:01:48.096Z"
                    }
                ]
            },
            {
                "id": "9b30474b-024b-4da3-bdb2-6ec3ef1559c0",
                "metric": "MINT_ERC20",
                "metric_display_name": "Mint ERC-20",
                "metric_description": "Mints of a currency (ERC-20)",
                "metric_type": "SERIES",
                "api_endpoint": "${BLOCKCHAIN_API_URL}/query",
                "created_at": "2023-11-01T12:01:48.096Z",
                "updated_at": "2023-11-01T12:01:48.096Z",
                "operations": [
                    {
                        "id": "db712d90-7f06-4bb4-b023-6d70010c5a11",
                        "metric_id": "9b30474b-024b-4da3-bdb2-6ec3ef1559c0",
                        "field": "to_address",
                        "as": "total",
                        "distinct": true,
                        "operation": "COUNT",
                        "operation_name": "Unique Receivers",
                        "operation_description": "Count of unique receivers of mint transfer event logs",
                        "created_at": "2023-11-01T12:01:48.096Z",
                        "updated_at": "2023-11-01T12:01:48.096Z"
                    },
                    {
                        "id": "ff4b159c-f9dd-4bdb-a9ba-68e0a31b2caf",
                        "metric_id": "9b30474b-024b-4da3-bdb2-6ec3ef1559c0",
                        "field": "from_address",
                        "as": "total",
                        "distinct": true,
                        "operation": "COUNT",
                        "operation_name": "Unique Senders",
                        "operation_description": "Count of unique senders of mint transfer event logs",
                        "created_at": "2023-11-01T12:01:48.096Z",
                        "updated_at": "2023-11-01T12:01:48.096Z"
                    },
                    {
                        "id": "b5dd2c96-eb0c-4c12-8468-e6e9df4ce886",
                        "metric_id": "9b30474b-024b-4da3-bdb2-6ec3ef1559c0",
                        "field": "volume",
                        "as": "total",
                        "distinct": false,
                        "operation": "MEDIAN",
                        "operation_name": "Median",
                        "operation_description": "Median of mint transfer event log volumes",
                        "created_at": "2023-11-01T12:01:48.096Z",
                        "updated_at": "2023-11-01T12:01:48.096Z"
                    },
                    {
                        "id": "57f4dd2f-6e9b-40a1-9213-8581e22ecc9a",
                        "metric_id": "9b30474b-024b-4da3-bdb2-6ec3ef1559c0",
                        "field": "volume",
                        "as": "total",
                        "distinct": false,
                        "operation": "MAX",
                        "operation_name": "Maximum",
                        "operation_description": "Maximum of mint transfer event log volumes",
                        "created_at": "2023-11-01T12:01:48.096Z",
                        "updated_at": "2023-11-01T12:01:48.096Z"
                    },
                    {
                        "id": "419b3bcc-74e9-4489-b859-1ab6188eeb24",
                        "metric_id": "9b30474b-024b-4da3-bdb2-6ec3ef1559c0",
                        "field": "volume",
                        "as": "total",
                        "distinct": false,
                        "operation": "MIN",
                        "operation_name": "Minimum",
                        "operation_description": "Minimum of mint transfer event log volumes",
                        "created_at": "2023-11-01T12:01:48.096Z",
                        "updated_at": "2023-11-01T12:01:48.096Z"
                    },
                    {
                        "id": "49642ece-d3fe-4c72-a472-0c504652702e",
                        "metric_id": "9b30474b-024b-4da3-bdb2-6ec3ef1559c0",
                        "field": "volume",
                        "as": "total",
                        "distinct": false,
                        "operation": "AVG",
                        "operation_name": "Average",
                        "operation_description": "Average of mint transfer event log volumes",
                        "created_at": "2023-11-01T12:01:48.096Z",
                        "updated_at": "2023-11-01T12:01:48.096Z"
                    },
                    {
                        "id": "27ec1a44-6e6f-4e97-a260-03a2a547b25a",
                        "metric_id": "9b30474b-024b-4da3-bdb2-6ec3ef1559c0",
                        "field": "volume",
                        "as": "total",
                        "distinct": false,
                        "operation": "SUM",
                        "operation_name": "Sum",
                        "operation_description": "Sum of mint transfer event log volumes",
                        "created_at": "2023-11-01T12:01:48.096Z",
                        "updated_at": "2023-11-01T12:01:48.096Z"
                    },
                    {
                        "id": "6940ec97-0d5d-4bde-bc7c-c3390b23e2ff",
                        "metric_id": "9b30474b-024b-4da3-bdb2-6ec3ef1559c0",
                        "field": "volume",
                        "as": "total",
                        "distinct": false,
                        "operation": "COUNT",
                        "operation_name": "Count",
                        "operation_description": "Count of mint transfer event logs",
                        "created_at": "2023-11-01T12:01:48.096Z",
                        "updated_at": "2023-11-01T12:01:48.096Z"
                    }
                ]
            },
        ],
        "errors": []
    },
    "errors": []
}

module.exports = metricsData;