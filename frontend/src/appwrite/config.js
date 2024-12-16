import conf from "../conf/conf.js";
import { Client, Databases } from "appwrite";

export class Service{
    client = new Client();
    databases;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwritePojectId)
        this.databases = new Databases(this.client)
    }

    async createRequests ({name, email, contactNumber, service, message}) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                "unique()",
                {
                    name, 
                    email,
                    contactNumber,
                    service,
                    message
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }
}

const service = new Service()

export default service