/**
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



/**
 * An order for a pets from the pet store
 */
export class Order {
    id?: number;

    petId?: number;

    quantity?: number;

    shipDate?: Date;

    /**
     * Order Status
     */
    status?: Order.StatusEnum;

    complete?: boolean;


    static discriminator = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "petId",
            "baseName": "petId",
            "type": "number"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "shipDate",
            "baseName": "shipDate",
            "type": "Date"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Order.StatusEnum"
        },
        {
            "name": "complete",
            "baseName": "complete",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return Order.attributeTypeMap;
    }
}
export namespace Order {
    export enum StatusEnum {
        Placed = <any> 'placed',
        Approved = <any> 'approved',
        Delivered = <any> 'delivered'
    }
}

