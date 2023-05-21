## @tripathirajan/storage-service

A Node.js package to manage cloud based file storage (Cloudinary).

## Installation

```
npm install @tripathirajan/storage-service
```

or

```
yarn add @tripathirajan/storage-service
```

## Usage

```javascript
const { StorageService, StorageServiceType } = require('@tripathirajan/storage-service');
// You have to pass service type. it can be: Cloud or File.
// By default it will use cloud service for uploads
const storageService = new StorageService(StorageServiceType.CLOUD);

// pass file buffer as 1st param, want to upload and options as 2nd params
storageService.upload(fileBuffer, { fileName });
```

If you are using Cloud service type then you have to make sure you have added following key in your `.env` file:

```
CLOUDINARY_NAME =
CLOUDINARY_KEY=
CLOUDINARY_SECRET=
```

## Method

### upload

```js
upload(fileBuffer, opts);
```

- fileBuffer : Buffer
- opts : Object // you can pass filename in option and it will be considered as publicId
