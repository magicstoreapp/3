
const initialState = {
    isShowToolbar: true,
    activeTabName: 'Home',
    lang: 'mn',
    searchText: '',

    isSearchTab: false,    
    isHeaderToolbar: true,
    isSearchToolbar: true,
    isStatusToolbar: true,

    separatorXPosition: 100,

    rootFolderIds:[
       {id:"101"},
       {id:"102"},
       {id:"103"} 
    ],

    folderData:[
        {
            id:"101",
            name:"Folder1",
            isOpen:true,
            isSelected:false,
            path:[{id:"101", name:"Folder1"}],
            children:[]
        },
        {
            id:"102",
            name:"Folder2",
            isOpen:true,
            isSelected:true,
            path:[{id:"102", name:"Folder2"}],
            children:["10201","10202"]
        },
        {
            id:"103",
            name:"Folder3",
            isSelected:true,
            isOpen:false,
            path:[{id:"103",name:"Folder3"}],
            children:[]
        },
        {
            id:"10201",
            name:"Font",
            isOpen:false,
            path:[{id:"102",name:"Folder2"},{id:"10201",name:"Folder2-1"}],
            children:[]
        },
        {
            id:"10202",
            name:"Folder",
            isOpen:true,
            path:[{id:"102",name:"Folder2"},{id:"10202",name:"Folder2-2"}],
            children:["10203"]
        },
        {
            id:"10203",
            name:"Folder2-2",
            isOpen:true,
            path:[{id:"102",name:"Folder2"},{id:"10202",name:"Folder2-2"},{id:"10203",name:"Folder2-2"}],
            children:[]
        }

    ],
    metaData:[

    ],


    selectedPath:[{id:"102",name:"Folder2"},{id:"10202",name:"Folder2-2"},{id:"10202",name:"Folder2-2"},{id:"10202",name:"Folder2-23"}],
    selectedFolderId:"10202",
    selectedFolders:[],
    selectedMetaDatas:[]




}


const explorerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_SHOW_TOOLBAR':
            return {
                ...state,
                isShowToolbar: !state.isShowToolbar
            };
        case 'TAB_CLICK':
            return {
                ...state,
                activeTabName: action.payload
            };

        case 'CHOOSE_LANGUAGE':
            return {
                ...state,
                lang: action.payload

            };

        case 'BLUR_SEARCHBAR':
            if (action.payload !== '')
                return {
                    ...state,
                    searchText: action.payload
                };
            else return {
                ...state,
                isSearchTab: false,
                searchText: '',
                activeTabName: 'Home'
            };

        case 'SET_SEARCH_TEXT':
            return {
                ...state,                
                searchText: action.payload
            };
            case 'FOCUS_SEARCHBAR':
            if (!state.isSearchTab)
                return {
                    ...state,
                    isSearchTab: true,
                    activeTabName: 'Additional'
                };
            else return state;
        case 'TOGGLE_HEADER_TOOLBAR':
            return {
                ...state,
                isHeaderToolbar: action.payload
            };
        case 'TOGGLE_SEARCHBAR_TOOLBAR':
            return {
                ...state,
                isSearchToolbar: action.payload
            };
        case 'TOGGLE_STATUSBAR_TOOLBAR':
            return {
                ...state,
                isStatusToolbar: action.payload
            };
        case 'TOGGLE_SELECT_FOLDER':
            return {
                ...state,
                isStatusToolbar: action.payload
            };
        case 'SELECTED_PATH_POP':
            return {
                ...state,
                selectedPath: [ ...state.selectedPath.slice(0,state.selectedPath.length-action.payload||1)],
                selectedFolderId:state.selectedPath.slice(-2)[0].id
            };
        case 'SET_SELECTED_PATH':
            console.log(action.payload.id)
            return {
                ...state,
                selectedPath: [...action.payload.path],
                selectedFolderId:action.payload.id
            };
        case 'TOGGLE_OPEN_FOLDER': 
        const ndx=action.payload.id;
            return {
                ...state,
                ...state.folderData.find(i=>i.id===ndx).isOpen= !state.folderData.find(i=>i.id===ndx).isOpen            
                
            };
        default:
            return state;
    }
}

export default explorerReducer;


// const toggleOpenFolderFn=(folderData=initialState.folderData,  path,folderId)=>{
//     let currentFolder = folderData;
//     for(var i=0;i++; i<path.length)
//         currentFolder=currentFolder.find(p=>p.id===path[i].id).children;
//     const changeFolderStatus=currentFolder.find(p=>p.id===folderId);
//     changeFolderStatus.isOpen=!changeFolderStatus.isOpen;



// }