# Rami Levy API 

## Overview

Rami Levy is a chain of supermarkets in Israel.

## API

### Query Catalog

Example for CURL:
```curl
curl 'https://www.rami-levy.co.il/api/catalog?' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: en-US,en;q=0.9,he;q=0.8' \
  -H 'authorization: Bearer {TOKEN}' \
  -H 'content-type: application/json;charset=UTF-8' \
  -H 'locale: he' \
  -H 'newrelic: eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjI3NzI1OTUiLCJhcCI6IjkxNDEyOTI1OSIsImlkIjoiMGY5MTNlMDVjZGIwZmNjOSIsInRyIjoiZmYzMDcwNzlmYmIyNTBiMjQwMGFkMzRjNzJlMWUwOTAiLCJ0aSI6MTczODc3NzIxODM1NH19' \
  -H 'origin: https://www.rami-levy.co.il' \
  -H 'priority: u=1, i' \
  -H 'referer: https://www.rami-levy.co.il/he' \
  -H 'sec-ch-ua: "Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-origin' \
  -H 'traceparent: 00-ff307079fbb250b2400ad34c72e1e090-0f913e05cdb0fcc9-01' \
  -H 'tracestate: 2772595@nr=0-1-2772595-914129259-0f913e05cdb0fcc9----1738777218354' \
  -H 'uid: 524745' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36' \
  --data-raw '{"q":"קוטג","aggs":1,"store":"331"}'
```

Response object:
```json
{
  "history": [],
  "q": "קוטג",
  "status": 200,
  "total":1,
  "data": [
    {
      "kosher_type": null,
      "features": [],
      "price": {
        "price": 5.9
      },
      "prop": {
        "unit": null,
        "sw_shakil": 0,
        "by_kilo": 0,
        "by_kilo_content": 260,
        "status": 2
      },
      "id": 9360,
      "multiplication": 1,
      "department": {
        "name": "חלב ביצים וסלטים",
        "id": 50,
        "sort": 20,
        "slug": "חלב-ביצים-וסלטים"
      },
      "barcode": 7290004127329,
      "brand": 5256,
      "group": {
        "name": "גבינות",
        "id": 202,
        "sort": 2,
        "slug": "גבינות"
      },
      "images": {
        "small": "/product/7290004127329/small.jpg",
        "original": "/product/7290004127329/large.jpg",
        "trim": "/product/7290004127329/trim.jpg",
        "transparent": "/product/7290004127329/transparent.png",
        "gallery": []
      },
      "department_id": 50,
      "subGroup": {
        "name": "גבינת קוטג'",
        "id": 273,
        "sort": 4,
        "slug": "גבינת-קוטג"
      },
      "preference": [],
      "kashruts": [19, 49],
      "available_in": [
        179, 279, 290, 306, 331, 411, 412, 1197, 1198, 1214, 1220, 1225, 1306,
        1307, 1323, 1329, 1332, 1333, 1330, 1221, 1314, 1378, 1226, 1389
      ],
      "gs": {
        "Ingredient_Sequence_and_Name": "חלב, מלח, תוסף תזונה: סידן (טריקלציום פוספט)",
        "Product_Dimensions": {
          "Product_Gross_Weight": {
            "UOM": "גרם",
            "text": "260.7 גרם",
            "value": "260.7"
          },
          "Net_Weight": {
            "UOM": "קג",
            "text": "0.25 קג",
            "value": "0.25"
          },
          "Product_Height": {
            "UOM": "סמ",
            "text": "7.25 סמ",
            "value": "7.25"
          },
          "Price_Comparison_Content": {
            "UOM": "גרם",
            "text": "100 גרם",
            "value": "100"
          },
          "Product_Width": {
            "UOM": "סמ",
            "text": "8.72 סמ",
            "value": "8.72"
          },
          "Product_Depth": {
            "UOM": "סמ",
            "text": "7.25 סמ",
            "value": "7.25"
          }
        },
        "Contains_Sulfur_Dioxide": null,
        "Alcohol_Percentage_in_Product": null,
        "BrandName": "תנובה",
        "Product_Description_English": "Cottage tnuva cup 250 gr 5% MEHADRIN",
        "Country_of_Origin": "IL",
        "Fat_Percentage_in_Product": null,
        "Allergen_Type_Code_and_Containment_May_Contain": [6818],
        "pH": null,
        "Serving_Size_Description": "",
        "litzman": true,
        "Food_Symbol_Red": [
          {
            "code": "FSR1",
            "value": "ללא סימון"
          }
        ],
        "Allergen_Type_Code_and_Containment": [6818],
        "Color_Number": null,
        "Search_Tags": [
          "7290004127329",
          "קוטג",
          "תנובה",
          "גביע",
          "250 גרם",
          "5%",
          "קוטג'",
          "קוטז",
          "קוטז'",
          "קוטג 5%",
          "קוטג' 5%",
          "קוטז 5%",
          "קוטז' 5%",
          "קוטג 5% תנובה",
          "קוטג' 5% תנובה",
          "קוטז 5% תנובה",
          "קוטז' 5% תנובה"
        ],
        "internal_product_description": "",
        "Color": null,
        "Diet_Information": [5538],
        "Nutritional_Values": [
          {
            "code": "79001",
            "label": "אנרגיה (קלוריות)",
            "fields": [
              {
                "col_code": "78001",
                "field_id": "5816",
                "col_field_id": "6066",
                "UOM": "קלוריות",
                "col_label": "ל-100 גרם",
                "text": "95 קלוריות",
                "value": "95",
                "field_name": "Energy_per_100_grams"
              }
            ]
          },
          {
            "code": "79007",
            "label": "שומנים (גרם)",
            "fields": [
              {
                "col_code": "78001",
                "field_id": "5826",
                "col_field_id": "6066",
                "UOM": "גרם",
                "col_label": "ל-100 גרם",
                "text": "5 גרם",
                "value": "5",
                "field_name": "Fats_per_100_grams"
              }
            ]
          },
          {
            "code": "79008",
            "label": "חומצות שומן רוויות (גרם)",
            "fields": [
              {
                "col_code": "78001",
                "field_id": "5828",
                "col_field_id": "6066",
                "UOM": "גרם",
                "col_label": "ל-100 גרם",
                "text": "3 גרם",
                "value": "3",
                "field_name": "Saturated_Fatty_Acids_per_100_grams"
              }
            ]
          },
          {
            "code": "79009",
            "label": "חומצות שומן טראנס (גרם)",
            "fields": [
              {
                "col_code": "78001",
                "field_id": "5830",
                "col_field_id": "6066",
                "UOM": "גרם",
                "col_label": "ל-100 גרם",
                "text": "פחות מ-0.5 גרם",
                "value": "L 0.5",
                "field_name": "Trans_Fatty_Acids_per_100_grams"
              }
            ]
          },
          {
            "code": "79010",
            "label": "כולסטרול (מג)",
            "fields": [
              {
                "col_code": "78001",
                "field_id": "5832",
                "col_field_id": "6066",
                "UOM": "מג",
                "col_label": "ל-100 גרם",
                "text": "15 מג",
                "value": "15",
                "field_name": "Cholesterol_per_100_grams"
              }
            ]
          },
          {
            "code": "79011",
            "label": "נתרן (מג)",
            "fields": [
              {
                "col_code": "78001",
                "field_id": "5836",
                "col_field_id": "6066",
                "UOM": "מג",
                "col_label": "ל-100 גרם",
                "text": "350 מג",
                "value": "350",
                "field_name": "Sodium_per_100_grams"
              }
            ]
          },
          {
            "code": "79003",
            "label": "סך הפחמימות (גרם)",
            "fields": [
              {
                "col_code": "78001",
                "field_id": "5820",
                "col_field_id": "6066",
                "UOM": "גרם",
                "col_label": "ל-100 גרם",
                "text": "1.5 גרם",
                "value": "1.5",
                "field_name": "Carbohydrates_per_100_grams"
              }
            ]
          },
          {
            "code": "79002",
            "label": "חלבונים (גרם)",
            "fields": [
              {
                "col_code": "78001",
                "field_id": "5818",
                "col_field_id": "6066",
                "UOM": "גרם",
                "col_label": "ל-100 גרם",
                "text": "11 גרם",
                "value": "11",
                "field_name": "Proteins_per_100_grams"
              }
            ]
          },
          {
            "code": "79014",
            "label": "סידן (מג)",
            "fields": [
              {
                "col_code": "78001",
                "field_id": "5865",
                "col_field_id": "6066",
                "UOM": "מג",
                "col_label": "ל-100 גרם",
                "text": "100 מג",
                "value": "100",
                "field_name": "Calcium_per_100_grams"
              }
            ]
          }
        ],
        "Fruit_Percentage_in_Product": null,
        "Serving_Suggestion": "",
        "Forbidden_Under_the_Age_of_18": null,
        "name": "קוטג' 5% מהדרין",
        "Hazard_Precautionary_Statement": "",
        "short_name": "קוטג' 5%",
        "Consumer_Storage_Instructions": "",
        "Net_Content": {
          "UOM": "קג",
          "text": "0.25 קג",
          "value": "0.25"
        },
        "Healthy_Product": "",
        "Cream_Percentage_in_Product": null
      },
      "sale": [],
      "mainImage": 1,
      "group_id": 202,
      "name": "קוטג תנובה גביע 250 גרם %5 ו.מהדרין",
      "site_id": 1,
      "sub_group_id": 273,
      "lables": [],
      "is360": 1,
      "hl": {
        "name": ["<em>קוטג</em> תנובה גביע 250 גרם %5 ו.מהדרין"]
      },
      "has_coupon": false
    }
  ],
  "filters": {
    "Cooking_Israel": [],
    "Board_of_Supervision": [
      {
        "id": 81012,
        "count": 1
      }
    ],
    "Allergen_Type_Code_and_Containment": [
      {
        "id": 6843,
        "count": 7
      },
      {
        "id": 6818,
        "count": 2
      },
      {
        "id": 6942,
        "count": 2
      }
    ],
    "Kosher_Supervision_Type": [
      {
        "id": 180,
        "count": 22
      },
      {
        "id": 182,
        "count": 2
      },
      {
        "id": 183,
        "count": 2
      }
    ],
    "Diet_Information": [
      {
        "id": 5538,
        "count": 2
      },
      {
        "id": 5509,
        "count": 1
      },
      {
        "id": 5514,
        "count": 1
      },
      {
        "id": 5592,
        "count": 1
      }
    ],
    "Rabbinate": [
      {
        "id": 67085,
        "count": 3
      },
      {
        "id": 67093,
        "count": 2
      },
      {
        "id": 67001,
        "count": 1
      }
    ],
    "Kosher_for_Passover": [
      {
        "id": 6402,
        "count": 2
      },
      {
        "id": 6403,
        "count": 2
      },
      {
        "id": 6401,
        "count": 1
      },
      {
        "id": 6404,
        "count": 1
      }
    ],
    "max_price": [],
    "min_price": [],
    "Sabbath_Observing_Plant": [],
    "subGroups": [
      {
        "id": 273,
        "count": 1
      }
    ],
    "Israel_Milk": [
      {
        "id": 6901,
        "count": 1
      }
    ],
    "Sheviit_Orlah_Tevel": [],
    "department": [
      {
        "id": 59,
        "count": 19
      },
      {
        "id": 50,
        "count": 2
      },
      {
        "id": 54,
        "count": 2
      },
      {
        "id": 58,
        "count": 2
      }
    ],
    "brand": [
      {
        "id": 4001,
        "count": 4
      },
      {
        "id": 1288,
        "count": 3
      },
      {
        "id": 4037,
        "count": 3
      },
      {
        "id": 3500,
        "count": 2
      },
      {
        "id": 3999,
        "count": 2
      },
      {
        "id": 1170,
        "count": 1
      },
      {
        "id": 1380,
        "count": 1
      },
      {
        "id": 3998,
        "count": 1
      },
      {
        "id": 4002,
        "count": 1
      },
      {
        "id": 4003,
        "count": 1
      }
    ],
    "is360": [
      {
        "id": 1,
        "count": 25
      },
      {
        "id": 0,
        "count": 1
      }
    ]
  }
}

```

### Cart operations

Every operation is done by sending a POST request to cart URL with the payload of the cart.
This is example of CURL:
```curl
curl 'https://www.rami-levy.co.il/api/v2/cart' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: en-US,en;q=0.9,he;q=0.8' \
  -H 'content-type: application/json;charset=UTF-8' \
  -H 'locale: he' \
  -H 'origin: https://www.rami-levy.co.il' \
  -H 'priority: u=1, i' \
  -H 'referer: https://www.rami-levy.co.il/he?debug' \
  -H 'sec-ch-ua: "Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-origin' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36' \
  --data-raw '{"store":"331","isClub":0,"supplyAt":"2025-02-09T00:00:00.000Z","items":{"164854":"1.00","393721":"1.00","398173":"1.00"},"meta":null}'
```

Response object:
```
{
    "sales": [
        {
            "code": 77892526,
            "sw_kefel": 0,
            "k_cmt": null,
            "k_acz_dis": null,
            "active": 1,
            "cmt": 1,
            "type": 1,
            "is_wallet": 0,
            "max_in_doc": null,
            "is_personal": 0,
            "name": "פיסטוק קלוי 150ג' קליית השקמה ב-7.90 ש\"ח",
            "k_scm": null,
            "days": [],
            "k_items": [],
            "from": "2025-02-04T00:00:00+02:00",
            "id": 678445,
            "to": "2025-02-15T23:59:59+02:00",
            "scm": 7.9,
            "is_club": 0,
            "countInEveryDivided": 1
        }
    ],
    "items": [
        {
            "countUsesSale": {},
            "FormatedSavePrice": 0,
            "FormatedTotalPrice": 29.9,
            "FormatedSavePriceClub": 0,
            "FormatedSavePriceWallet": 0,
            "FormatedTotalPriceClub": 29.9,
            "FormatedTotalPriceWallet": 29.9,
            "FormatedTotalPriceWithoutDiscount": 29.9,
            "finalPriceClub": 29.9,
            "finalPriceWallet": 29.9,
            "PromotionId": null,
            "PromotionIdClub": null,
            "site_id": 1,
            "id": 164854,
            "name": "מחיר משלוח",
            "price": 29.9,
            "quantity": 1,
            "has_coupon": false,
            "is_delivery": true,
            "isClub": false,
            "isWallet": false
        },
        {
            "countUsesSale": {
                "678445": 1
            },
            "FormatedSavePrice": 5.1,
            "FormatedTotalPrice": 7.9,
            "FormatedSavePriceClub": 5.1,
            "FormatedSavePriceWallet": 5.1,
            "FormatedTotalPriceClub": 7.9,
            "FormatedTotalPriceWallet": 7.9,
            "FormatedTotalPriceWithoutDiscount": 13,
            "finalPriceClub": 7.9,
            "finalPriceWallet": 7.9,
            "PromotionId": [
                678445
            ],
            "PromotionIdClub": null,
            "department_id": 49,
            "group_id": 279,
            "site_id": 1,
            "id": 398173,
            "name": "פיסטוק * קלוי 150 גר בשקית",
            "price": 13,
            "quantity": 1,
            "sub_group_id": 1158,
            "has_coupon": false,
            "is_delivery": false,
            "isClub": false,
            "isWallet": false
        }
    ],
    "log_id": null,
    "price": 7.9,
    "priceClub": 7.9,
    "discountClub": 5.1,
    "priceWallet": 7.9,
    "discountWallet": 5.1,
    "discount": 5.1,
    "quantity": 2,
    "meta": {
        "ct": 3,
        "ms": 0.39162,
        "cs": 1
    },
    "status": 200
}
```

### Removing items from the cart
For removing items for the cart you will need to send the payload but with the items without the items you want to remove.
for example - if I have in the cart 3 items and I want to remove 1 item, I will send the payload with the 2 items that I want to keep.
Every cart operation is writing the whole cart to the database, so if you want to remove an item you need to send the payload without the item you want to remove.

### Add quantity to the cart
As for adding quantity to the cart, you will need to send the payload with the items you want to add and the quantity you want to add.
For example - if I have item x with quantity 1 and I want to add 1 more, you will need to send the payload with the item x with quantity 2 (and the rest of the items that you want to keep with the same quantity).

### Provide link to the checkout
For link to the checkout, just send this link: https://www.rami-levy.co.il/he/dashboard/checkout





