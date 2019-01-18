# Desafio-BrasPag
Technical Challange from BrasPag to develop a Rest API for simulated Merchant Discount Rates operations

Functionalities:
- GET /mdr = retrieves the hole MDR database
>PowerShell Invoke-RestMethod -Method 'get' -Uri 'http://rest-api-mdr.azurewebsites.net/mdr'
- GET /mdr/{Adquirente} = retieves only the information from the required Adquirente
>PowerShell Invoke-RestMethod -Method 'get' -Uri 'http://rest-api-mdr.azurewebsites.net/mdr/A'
- POST /transaction = receives a json structure and returns the value taxed by the related Merchant Discount Rate (MDR)
>PowerShell Invoke-RestMethod -Method 'post' -Uri 'http://rest-api-mdr.azurewebsites.net/transaction' -ContentType 'application/json' -Body '{"Valor":200,"Adquirente":"C","Bandeira":"visa","Tipo":"credito"}'
>>"Valor": transaction value to be taxed<br>
>>"Adquirente": name reference of the merchant<br>
>>"Bandeira": card brand<br>
>>"Tipo": transaction type, such as credit and debit
