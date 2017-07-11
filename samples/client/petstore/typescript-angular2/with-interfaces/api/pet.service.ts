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

/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import '../rxjs-operators';

import { ApiResponse } from '../model/apiResponse';
import { Pet } from '../model/pet';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { PetServiceInterface }                            from './PetServiceInterface';
import { ObjectSerializer } from '../types';


@Injectable()
export class PetService implements PetServiceInterface {

    protected basePath = 'http://petstore.swagger.io/v2';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
			this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * 
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                (objA as any)[key] = (objB as any)[key];
            }
        }
        return <T1&T2>objA;
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }

    /**
     * Add a new pet to the store
     * 
     * @param body Pet object that needs to be added to the store
     */
    public addPet(body: Pet, extraHttpRequestParams?: any): Observable<{}> {
        return this.addPetWithHttpInfo(body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return ObjectSerializer.deserialize(response.json(), "") || {};
                }
            });
    }

    /**
     * Deletes a pet
     * 
     * @param petId Pet id to delete
     * @param apiKey 
     */
    public deletePet(petId: number, apiKey?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.deletePetWithHttpInfo(petId, apiKey, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return ObjectSerializer.deserialize(response.json(), "") || {};
                }
            });
    }

    /**
     * Finds Pets by status
     * Multiple status values can be provided with comma separated strings
     * @param status Status values that need to be considered for filter
     */
    public findPetsByStatus(status: Array<string>, extraHttpRequestParams?: any): Observable<Array<Pet>> {
        return this.findPetsByStatusWithHttpInfo(status, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return ObjectSerializer.deserialize(response.json(), "Array&lt;Pet&gt;") || {};
                }
            });
    }

    /**
     * Finds Pets by tags
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * @param tags Tags to filter by
     */
    public findPetsByTags(tags: Array<string>, extraHttpRequestParams?: any): Observable<Array<Pet>> {
        return this.findPetsByTagsWithHttpInfo(tags, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return ObjectSerializer.deserialize(response.json(), "Array&lt;Pet&gt;") || {};
                }
            });
    }

    /**
     * Find pet by ID
     * Returns a single pet
     * @param petId ID of pet to return
     */
    public getPetById(petId: number, extraHttpRequestParams?: any): Observable<Pet> {
        return this.getPetByIdWithHttpInfo(petId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return ObjectSerializer.deserialize(response.json(), "Pet") || {};
                }
            });
    }

    /**
     * Update an existing pet
     * 
     * @param body Pet object that needs to be added to the store
     */
    public updatePet(body: Pet, extraHttpRequestParams?: any): Observable<{}> {
        return this.updatePetWithHttpInfo(body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return ObjectSerializer.deserialize(response.json(), "") || {};
                }
            });
    }

    /**
     * Updates a pet in the store with form data
     * 
     * @param petId ID of pet that needs to be updated
     * @param name Updated name of the pet
     * @param status Updated status of the pet
     */
    public updatePetWithForm(petId: number, name?: string, status?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.updatePetWithFormWithHttpInfo(petId, name, status, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return ObjectSerializer.deserialize(response.json(), "") || {};
                }
            });
    }

    /**
     * uploads an image
     * 
     * @param petId ID of pet to update
     * @param additionalMetadata Additional data to pass to server
     * @param file file to upload
     */
    public uploadFile(petId: number, additionalMetadata?: string, file?: Blob, extraHttpRequestParams?: any): Observable<ApiResponse> {
        return this.uploadFileWithHttpInfo(petId, additionalMetadata, file, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return ObjectSerializer.deserialize(response.json(), "ApiResponse") || {};
                }
            });
    }


    /**
     * Add a new pet to the store
     * 
     * @param body Pet object that needs to be added to the store
     */
    public addPetWithHttpInfo(body: Pet, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/pet';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addPet.');
        }

        // to determine the Accept header
        let produces: string[] = [
            'application/xml',
            'application/json'
        ];

        // authentication (petstore_auth) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

            
        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(ObjectSerializer.serialize(body, "Pet")), // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Deletes a pet
     * 
     * @param petId Pet id to delete
     * @param apiKey 
     */
    public deletePetWithHttpInfo(petId: number, apiKey?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/pet/${petId}'
                    .replace('${' + 'petId' + '}', String(petId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'petId' is not null or undefined
        if (petId === null || petId === undefined) {
            throw new Error('Required parameter petId was null or undefined when calling deletePet.');
        }
        if (apiKey !== undefined && apiKey !== null) {
            headers.set('api_key', String(apiKey));
        }


        // to determine the Accept header
        let produces: string[] = [
            'application/xml',
            'application/json'
        ];

        // authentication (petstore_auth) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

            
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Delete,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Finds Pets by status
     * Multiple status values can be provided with comma separated strings
     * @param status Status values that need to be considered for filter
     */
    public findPetsByStatusWithHttpInfo(status: Array<string>, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/pet/findByStatus';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'status' is not null or undefined
        if (status === null || status === undefined) {
            throw new Error('Required parameter status was null or undefined when calling findPetsByStatus.');
        }
        if (status) {
            queryParameters.set('status', status.join(COLLECTION_FORMATS['csv']));
        }


        // to determine the Accept header
        let produces: string[] = [
            'application/xml',
            'application/json'
        ];

        // authentication (petstore_auth) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

            
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Finds Pets by tags
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * @param tags Tags to filter by
     */
    public findPetsByTagsWithHttpInfo(tags: Array<string>, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/pet/findByTags';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'tags' is not null or undefined
        if (tags === null || tags === undefined) {
            throw new Error('Required parameter tags was null or undefined when calling findPetsByTags.');
        }
        if (tags) {
            queryParameters.set('tags', tags.join(COLLECTION_FORMATS['csv']));
        }


        // to determine the Accept header
        let produces: string[] = [
            'application/xml',
            'application/json'
        ];

        // authentication (petstore_auth) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

            
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Find pet by ID
     * Returns a single pet
     * @param petId ID of pet to return
     */
    public getPetByIdWithHttpInfo(petId: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/pet/${petId}'
                    .replace('${' + 'petId' + '}', String(petId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'petId' is not null or undefined
        if (petId === null || petId === undefined) {
            throw new Error('Required parameter petId was null or undefined when calling getPetById.');
        }

        // to determine the Accept header
        let produces: string[] = [
            'application/xml',
            'application/json'
        ];

        // authentication (api_key) required
        if (this.configuration.apiKeys["api_key"]) {
            headers.set('api_key', this.configuration.apiKeys["api_key"]);
        }

            
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Update an existing pet
     * 
     * @param body Pet object that needs to be added to the store
     */
    public updatePetWithHttpInfo(body: Pet, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/pet';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updatePet.');
        }

        // to determine the Accept header
        let produces: string[] = [
            'application/xml',
            'application/json'
        ];

        // authentication (petstore_auth) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

            
        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: body == null ? '' : JSON.stringify(ObjectSerializer.serialize(body, "Pet")), // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Updates a pet in the store with form data
     * 
     * @param petId ID of pet that needs to be updated
     * @param name Updated name of the pet
     * @param status Updated status of the pet
     */
    public updatePetWithFormWithHttpInfo(petId: number, name?: string, status?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/pet/${petId}'
                    .replace('${' + 'petId' + '}', String(petId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'petId' is not null or undefined
        if (petId === null || petId === undefined) {
            throw new Error('Required parameter petId was null or undefined when calling updatePetWithForm.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/x-www-form-urlencoded'
        ];
        let canConsumeForm = this.canConsumeForm(consumes);
        let useForm = false;
        let formParams = new (useForm ? FormData : URLSearchParams as any)() as {
          set(param: string, value: any): void;
        };

        // to determine the Accept header
        let produces: string[] = [
            'application/xml',
            'application/json'
        ];

        // authentication (petstore_auth) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

            
        if (name !== undefined) {
            formParams.set('name', <any>name);
        }

        if (status !== undefined) {
            formParams.set('status', <any>status);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: formParams.toString(),
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * uploads an image
     * 
     * @param petId ID of pet to update
     * @param additionalMetadata Additional data to pass to server
     * @param file file to upload
     */
    public uploadFileWithHttpInfo(petId: number, additionalMetadata?: string, file?: Blob, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/pet/${petId}/uploadImage'
                    .replace('${' + 'petId' + '}', String(petId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'petId' is not null or undefined
        if (petId === null || petId === undefined) {
            throw new Error('Required parameter petId was null or undefined when calling uploadFile.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'multipart/form-data'
        ];
        let canConsumeForm = this.canConsumeForm(consumes);
        let useForm = false;
        useForm = canConsumeForm;
        let formParams = new (useForm ? FormData : URLSearchParams as any)() as {
          set(param: string, value: any): void;
        };

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (petstore_auth) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

            
        if (additionalMetadata !== undefined) {
            formParams.set('additionalMetadata', <any>additionalMetadata);
        }

        if (file !== undefined) {
            formParams.set('file', <any>file);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: formParams.toString(),
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
