export const toggleShowToolbar = () => {
    return {
        type: 'TOGGLE_SHOW_TOOLBAR'
    };
};

export const clickTab = (tab_name) => {
    return {
        type: 'TAB_CLICK',
        payload:tab_name
    };
};

export const chooseLanguage = (lang) => {
    return {
        type: 'CHOOSE_LANGUAGE',
        payload:lang
    };
};

export const searchbarBlur = (searchText) => {
    return {
        type: 'BLUR_SEARCHBAR',
        payload:searchText
    };
};

export const setSearchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT',
        payload:searchText
    };
};

export const searchbarFocus = () => {
    return {
        type: 'FOCUS_SEARCHBAR'
    };
};

export const toggleHeaderToolbar = (ok) => {
    return {
        type: 'TOGGLE_HEADER_TOOLBAR',
        payload:ok
    };
};

export const toggleSearchbar = (ok) => {
    return {
        type: 'TOGGLE_SEARCHBAR_TOOLBAR',
        payload:ok
    };
};

export const toggleStatusbar = (ok) => {
    return {
        type: 'TOGGLE_STATUSBAR_TOOLBAR',
        payload:ok
    };
};

export const toggleSelectFolder = (id) => {
    return {
        type: 'TOGGLE_SELECT_FOLDER',
        payload:id
    };
};


export const selectedPathPop = (cnt) => {
    return {
        type: 'SELECTED_PATH_POP',
        payload:cnt
    };
};



export const setSelectedPath = (data) => {
    return {
        type: 'SET_SELECTED_PATH',
        payload:data
    };
};

export const toggleOpenFolder = (data) => {
    return {
        type: 'TOGGLE_OPEN_FOLDER',
        payload:data
    };
};