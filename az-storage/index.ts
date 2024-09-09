import * as pulumi from "@pulumi/pulumi";
import * as resources from "@pulumi/azure-native/resources";
import * as storage from "@pulumi/azure-native/storage";

let rgName: string = ""
let sgName: string = ""
let location: string = ""

// let rgName = new pulumi.Config.('rgName')
// const sgName = new pulumi.Config('sgName')
// const location = new pulumi.Config('location')


// Create an Azure resource (Storage Account)
const storageAccount = new storage.StorageAccount("sg", {
    accountName: sgName,
    resourceGroupName: rgName,
    location: location,
    sku: {
        name: storage.SkuName.Standard_LRS,
    },
    kind: storage.Kind.StorageV2,
});

console.log(storageAccount)

// const storageAccountKeys = storage.listStorageAccountKeysOutput({
//     resourceGroupName: rgName,
//     accountName: sgName
// });

// export const primaryStorageKey = storageAccountKeys.keys[0].value;
