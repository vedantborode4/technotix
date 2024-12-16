const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwritePojectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
}

export default conf