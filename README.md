# API pet store
## _Documentacion para consumo de la API_


En el siguiente documento se detalla el paso a paso de como crear y actualizar los datos de una mascota de una tienda online teniendo en cuenta que tiene una API denominada  [PETSTORE](https://petstore.swagger.io/#/pet/updatePet).

- EndPoints existentes
- Paso a paso para crear una mascota
- Paso a paso para actualizar una mascota

## Rutas

La ruta del servicio de la tienda de mascotas es : https://petstore.swagger.io/v2
A continuación se muestran los endPoints para ser consumidos


| Tipo | Descripción |Ruta |
| ------ | ------ |------ |
| GET | Obtener mascota por ID | ```/pet/{petId}``` |
| POST |Crear nueva mascota |```/pet``` |
| PUT | Actualizar mascota |```/pet``` |
| DELETE | Eliminar mascota por ID |```/pet/{petId}``` |

## Crear Mascota
![Secuencia](https://desarrollo.cooperativabanos.com.ec/wp-content/uploads/2022/05/secuencia1.png)

Diagrama de secuencia para la creación de una mascota

Es necesario conocer los request que deben ser enviados al servicio para crear el registro

| Request | Tipo |
| ------ | ------ |
| id(required) | ```integer($int64)``` |
| category | ```object: {id: integer($int64),name: string}```|
| name(required) | ``` string ``` |
| photoUrls | ``` Array<string> ```|
| tags | ``` Array< object: {id:integer($int64),name:string}>```|
| status | ```enum<string>(available|pending|sold)``` |

Ejemplo:


```{    
  "id": 0,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}
```

- Ruta a utilizar de tipo GET  https://petstore.swagger.io/v2/pet

Código de respuesta:
| Codigo | Respuesta |
| ------ | ------ |
| 200 | OK |
| 405 | Invalid input|



#### Consumo de la API con postman
1. EndPoint para creación de mascota

![Imagen](https://desarrollo.cooperativabanos.com.ec/wp-content/uploads/2022/05/postmancrear1.png)

2. Request que se debe enviar

![Imagen](https://desarrollo.cooperativabanos.com.ec/wp-content/uploads/2022/05/postmancrear.png)

### Implementación consumo desde angular
Código github: https://github.com/DavidTamayoRomo/testMascota.git
1. Crear un servicio el cual contenga el endPoint que se va a utilizar y enviar el modelo establecido anteriormente.
```
const base_url = 'https://petstore.swagger.io/v2';
createPet(pet:Pet){
    return this.http.post(`${base_url}/pet`, pet);
}
```
2. Consumir el servicio con los datos del formulario
```
crearPet() {
    this.petService.createPet(this.registerForm.value).subscribe();
}
```
3. Respuesta
![Imagen](https://desarrollo.cooperativabanos.com.ec/wp-content/uploads/2022/05/respuesta1.png)

### Ejemplos de código
- Código Javascrip
```
var request = require("request");
var options = {
        method: 'POST',
        url: 'https://petstore.swagger.io/v2/pet', //  Ruta para crear
        headers: {
            'content-type': 'application/json'
        },
        body: {
          {    
            "id": 0,
            "category": {
              "id": 0,
              "name": "string"
            },
            "name": "doggie",
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 0,
                "name": "string"
              }
            ],
            "status": "available"
          }          
        }
      }
      request(options, function(error, response, body) {
            if (error) throw new Error(error);
            console.log(body);
      });

```

- Código Python
```
import requests
url = "https://petstore.swagger.io/v2/pet"
payload = "{   \"id\": 0, \"category\": { \"id\": 0,\"name\": \"string\"},\"name\": \"doggie\",\"photoUrls\": [\"string\"],\"tags\": [{\"id\": 0,\"name\": \"string\"}], \"status\": \"available\"} }"
headers = { 'content-type': 'application/json' }
response = requests.request("POST", url, data = payload, headers = headers)
print(response.text)
```

- Código PHP
```
$client = new http\Client;
$request = new http\Client\Request;
$body = new http\Message\Body;
$body->append('{   \"id\": 0, \"category\": { \"id\": 0,\"name\": \"string\"},\"name\": \"doggie\",\"photoUrls\": [\"string\"],\"tags\": [{\"id\": 0,\"name\": \"string\"}], \"status\": \"available\"} }');
 
$request->setRequestUrl('https://petstore.swagger.io/v2/pet');
$request->setRequestMethod('POST');
$request->setBody($body);
$request->setHeaders(array(
  'content-type' => 'application/json'
));
$client->enqueue($request)->send();
$response = $client->getResponse();
echo $response->getBody();
```


# Actualizar Mascota

![Imagen](https://desarrollo.cooperativabanos.com.ec/wp-content/uploads/2022/05/actualizarsecuencia.png)

Diagrama de secuencia para la actualización de una mascota

Ruta a utilizar de tipo PUT  https://petstore.swagger.io/v2/pet

Body es requerido, es importante saber que en el require Id se debe enviar el id de la mascota a actualizar con los nuevos datos.
Código de respuesta:

| Codigo | Respuesta |
| ------ | ------ |
| 200 | OK |
| 400 | Invalid ID supplied|
| 404 | Pet not found |
| 405 | Validation exception|

#### Consumo de la API con postman

1. EndPoint para actualizar mascota

![Imagen](https://desarrollo.cooperativabanos.com.ec/wp-content/uploads/2022/05/actualizarpost.png)

2. Request que se debe enviar

![Imagen](https://desarrollo.cooperativabanos.com.ec/wp-content/uploads/2022/05/actualizarpost2.png)


### Ejemplos de código
- Código Javascrip
```
var request = require("request");
var options = {
        method: 'PUT',
        url: 'https://petstore.swagger.io/v2/pet', //  Ruta para actualizar
        headers: {
            'content-type': 'application/json'
        },
        body: {
          {    
            "id": 9223372036854027105,
            "category": {
              "id": 0,
              "name": "string"
            },
            "name": "Datos para actualizar",
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 0,
                "name": "string"
              }
            ],
            "status": "available"
          }          
        }
      }
      request(options, function(error, response, body) {
            if (error) throw new Error(error);
            console.log(body);
      });

```

- Código Python
```
import requests
url = "https://petstore.swagger.io/v2/pet"
payload = "{   \"id\": 9223372036854027105, \"category\": { \"id\": 0,\"name\": \"string\"},\"name\": \"doggie\",\"photoUrls\": [\"string\"],\"tags\": [{\"id\": 0,\"name\": \"string\"}], \"status\": \"available\"} }"
headers = { 'content-type': 'application/json' }
response = requests.request("PUT", url, data = payload, headers = headers)
print(response.text)
```

- Código PHP
```
$client = new http\Client;
$request = new http\Client\Request;
$body = new http\Message\Body;
$body->append('{   \"id\": 9223372036854027105, \"category\": { \"id\": 0,\"name\": \"string\"},\"name\": \"doggie\",\"photoUrls\": [\"string\"],\"tags\": [{\"id\": 0,\"name\": \"string\"}], \"status\": \"available\"} }');
 
$request->setRequestUrl('https://petstore.swagger.io/v2/pet');
$request->setRequestMethod('PUT');
$request->setBody($body);
$request->setHeaders(array(
  'content-type' => 'application/json'
));
$client->enqueue($request)->send();
$response = $client->getResponse();
echo $response->getBody();
```