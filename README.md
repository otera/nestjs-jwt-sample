# nestjs-jwt-sample

## POST Request

- URL: http://localhost:3000/admin/login
- REQUEST: {"username": "admin", "password": "password"}

### Return

```
{
  "accessToken": "TOKEN_STRING"
}
```

## GET Request

- URL: http://localhost:3000/admin/status
- Bearer: TOKEN_STRING

### Return

```
true
```
