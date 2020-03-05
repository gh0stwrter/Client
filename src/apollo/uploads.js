import {gql} from "apollo-boost";

export const UPLOAD_WRITTEN_COMP = gql`
    mutation addWrittenComp($file: Upload! $writtenInput: WrittenCompInput!){
        addWrittenComp(file: $file ,writtenInput: $writtenInput){
            filename,
            mimetype
            encoding
        }
        }
    
`