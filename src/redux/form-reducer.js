const CHANGE_POST = 'CHANGE_POST';
const INIT_STATE_POST = 'INIT_STATE_POST';
const SHOW_ON_SUBMIT_POST_ERROR = 'SHOW_ON_SUBMIT_POST_ERROR';
const SHOW_ON_SUBMIT_EDIT_POST_ERROR = 'SHOW_ON_SUBMIT_EDIT_POST_ERROR';
const INIT_EDIT_POST_FORM = 'INIT_EDIT_POST_FORM';
const CHANGE_POST_EDIT = 'CHANGE_POST_EDIT';

const CHANGE_LOGIN = 'CHANGE_LOGIN';
const SHOW_ON_SUBMIT_LOGIN_ERROR = 'SHOW_ON_SUBMIT_LOGIN_ERROR';
const INIT_REGISTER = 'INIT_REGISTER';
const CHANGE_REGISTER = 'CHANGE_REGISTER';
const SHOW_ON_SUBMIT_REGISTER_ERROR = 'SHOW_ON_SUBMIT_REGISTER_ERROR';

const CHANGE_COMMENT = 'CHANGE_COMMENT';
const INIT_COMMENT = 'INIT_COMMENT';
const SHOW_ON_SAVING_COMMENT_ERROR = 'SHOW_ON_SAVING_COMMENT_ERROR';
const INIT_COMMENT_EDIT = 'INIT_COMMENT_EDIT';
const CHANGE_COMMENT_EDIT = 'CHANGE_COMMENT_EDIT';
const SHOW_ON_SAVING_EDIT_COMMENT_ERROR = 'SHOW_ON_SAVING_EDIT_COMMENT_ERROR';

const CHANGE_CREATE_BODY_ANN = 'CHANGE_CREATE_BODY_ANN';
const CHANGE_CREATE_TITLE_ANN = 'CHANGE_CREATE_TITLE_ANN';
const SHOW_ON_SAVING_CREATE_ANN_ERROR = 'SHOW_ON_SAVING_CREATE_ANN_ERROR';
const INIT_CREATE_ANN = 'INIT_CREATE_ANN';
const SHOW_ON_SAVING_EDIT_ANN_ERROR = 'SHOW_ON_SAVING_EDIT_ANN_ERROR';
const INIT_EDIT_ANN = 'INIT_EDIT_ANN';
const CHANGE_EDIT_BODY_ANN = 'CHANGE_EDIT_BODY_ANN';
const CHANGE_EDIT_TITLE_ANN = 'CHANGE_EDIT_TITLE_ANN';

const initialState = {
    post: { 
        isFormValid: false,
        showOnSubmitError: false,
        inputControls: {
            title: {
                value: '',
                type: '',
                errorMessage: 'Enter correct value',
                label: 'Enter new title:',
                placeholder: 'Your title',
                valid: false,
                touched: false,
                validation: {
                    required: true
                }
            }, 
            body: {
                value: '',
                type: '',
                errorMessage: 'Enter correct value',
                label: 'And text:',
                placeholder: 'Write text...',
                valid: false,
                touched: false,
                validation: {
                    required: true
                }
            }
        } 
    },
    postEdit: { 
        isFormValid: true,
        showOnSubmitError: false,
        inputControls: {
            title: {
                value: '',
                type: '',
                errorMessage: 'Enter correct value',
                label: 'Edit your title:',
                placeholder: 'Title',
                valid: true,
                touched: false,
                validation: {
                    required: true,
                    minLength: 1
                }
            }, 
            body: {
                value: '',
                type: '',
                errorMessage: 'Enter correct value',
                label: 'Edit your text:',
                placeholder: 'Text',
                valid: true,
                touched: false,
                validation: {
                    required: true,
                    minLength: 1
                }
            }
        } 
    },
    login: { 
        isFormValid: false,
        showOnSubmitError: false,
        inputControls: {
            email: {
                value: '',
                type: 'email',
                errorMessage: 'Enter correct value',
                label: 'Input email:',
                placeholder: 'Email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            }, 
            password: {
                value: '',
                type: 'password',
                errorMessage: 'Enter correct value, min length 6 symbols',
                label: 'Input password:',
                placeholder: 'Password',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        } 
    },
    register: {
        isFormValid: false,
        showOnSubmitError: false,
        inputControls: {
            firstName: {
                value: '',
                type: 'text',
                errorMessage: 'Enter correct value',
                label: 'First name:',
                placeholder: 'First name',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 2
                }
            },
            lastName: {
                value: '',
                type: 'text',
                errorMessage: 'Enter correct value',
                label: 'Last name:',
                placeholder: 'Last name',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 2
                }
            },
            age: {
                value: '',
                type: 'number',
                errorMessage: 'Min age is 12',
                label: 'Your age:',
                placeholder: 'Age',
                min: 12,
                max: 100,
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minValue: 12
                }
            },
            email: {
                value: '',
                type: 'email',
                errorMessage: 'Enter correct value',
                label: 'Email:',
                placeholder: 'Email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                errorMessage: 'Enter correct value, min length 6 symbols, and matching passwords',
                label: 'Password:',
                placeholder: 'Password',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6,
                    password: true
                }
            },
            confirmPassword: {
                value: '',
                type: 'password',
                errorMessage: 'Not matching. Enter correct value!',
                label: 'Confirm password:',
                placeholder: 'Confirm password',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6,
                    confirmPassword: true
                }
            }
        }
    },
    comment: { 
        value: '',
        showOnSavingCommentError: false,
        type: 'text',
        errorMessage: 'Enter correct value',
        placeholder: 'Write comment...',
        valid: false,
        touched: false,
        validation: {
            minLength: 1
        }
    },
    commentEdit: { 
        value: '',
        showOnSavingEditError: false,
        type: 'text',
        errorMessage: 'Enter correct value',
        placeholder: 'Write comment...',
        valid: true,
        touched: false,
        validation: {
            minLength: 1
        }
    },
    announcement: {
        isFormValid: false,
        showOnSaveError: false,
        title: {
            value: '',
            type: 'text',
            errorMessage: 'Enter correct value',
            label: 'your title...',
            placeholder: 'Your title...',
            valid: false,
            touched: false,
            validation: {
                required: true,
                minLength: 1
            }
        },
        body: {
            value: '',
            type: 'text',
            errorMessage: 'Enter correct value',
            placeholder: 'Write text...',
            valid: false,
            touched: false,
            validation: {
                required: true,
                minLength: 2
            }
        }
    },
    announcementEdit: {
        isFormValid: true,
        showOnSaveError: false,
        title: {
            value: '',
            type: 'text',
            errorMessage: 'Enter correct value',
            label: 'your title...',
            placeholder: 'Your title...',
            valid: true,
            touched: false,
            validation: {
                required: true,
                minLength: 1
            }
        },
        body: {
            value: '',
            type: 'text',
            errorMessage: 'Enter correct value',
            placeholder: 'Write text...',
            valid: true,
            touched: false,
            validation: {
                required: true,
                minLength: 2
            }
        }
    }
};

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_POST: {
            return {
                ...state,
                post: {
                    ...state.post,
                    showOnSubmitError: action.payload.showOnSubmitError,
                    isFormValid: action.payload.isFormValid,
                    inputControls: {
                        ...state.post.inputControls,
                        ...action.payload.inputControls
                    }
                }
            }
        }
        case INIT_STATE_POST: {
            return {
                ...state,
                post: initialState.post
            }
        }
        case SHOW_ON_SUBMIT_POST_ERROR: {
            return {
                ...state,
                post: {
                    ...state.post,
                    showOnSubmitError: action.payload
                }
            }
        }
        case CHANGE_POST_EDIT: {
            return {
                ...state,
                postEdit: {
                    ...state.postEdit,
                    showOnSubmitError: action.payload.showOnSubmitError,
                    isFormValid: action.payload.isFormValid,
                    inputControls: {
                        ...state.postEdit.inputControls,
                        ...action.payload.inputControls
                    }
                }
            }
        }
        case SHOW_ON_SUBMIT_EDIT_POST_ERROR: {
            return {
                ...state,
                postEdit: {
                    ...state.postEdit,
                    showOnSubmitError: action.payload
                }
            }
        }
        case INIT_EDIT_POST_FORM: {
            return {
                ...state,
                postEdit: {
                    ...state.postEdit,
                    inputControls: {
                        ...state.postEdit.inputControls,
                        title: {
                            ...state.postEdit.inputControls.title,
                            value: action.payload.title
                        },
                        body: {
                            ...state.postEdit.inputControls.body,
                            value: action.payload.body
                        }
                    }
                }
            }
        }
        case CHANGE_LOGIN: {
            return {
                ...state,
                login: {
                    ...state.login,
                    showOnSubmitError: action.payload.showOnSubmitError,
                    isFormValid: action.payload.isFormValid,
                    inputControls: {
                        ...state.login.inputControls,
                        ...action.payload.inputControls
                    }
                }
            }
        }
        case SHOW_ON_SUBMIT_LOGIN_ERROR: {
            return {
                ...state,
                login: {
                    ...state.login,
                    showOnSubmitError: action.payload
                }
            }
        }
        case CHANGE_REGISTER: {
            return {
                ...state,
                register: {
                    ...state.register,
                    showOnSubmitError: action.payload.showOnSubmitError,
                    isFormValid: action.payload.isFormValid,
                    inputControls: {
                        ...state.register.inputControls,
                        ...action.payload.inputControls
                    }
                }
            }
        }
        case SHOW_ON_SUBMIT_REGISTER_ERROR: {
            return {
                ...state,
                register: {
                    ...state.register,
                    showOnSubmitError: action.payload
                }
            }
        }
        case INIT_REGISTER: {
            return {
                ...state,
                register: initialState.register
            }
        }
        case CHANGE_COMMENT: {
            return {
                ...state,
                comment: action.payload
            }
        }
        case INIT_COMMENT: {
            return {
                ...state,
                comment: initialState.comment
            }
        }
        case INIT_COMMENT_EDIT: {
            return {
                ...state,
                commentEdit: {
                    ...state.commentEdit,
                    value: action.payload
                }
            }
        }
        case CHANGE_COMMENT_EDIT: {
            return {
                ...state,
                commentEdit: action.payload
            }
        }
        case SHOW_ON_SAVING_EDIT_COMMENT_ERROR: {
            return {
                ...state,
                commentEdit: {
                    ...state.commentEdit,
                    showOnSavingEditError: action.payload
                }
            }
        }
        case SHOW_ON_SAVING_COMMENT_ERROR: {
            return {
                ...state,
                comment: {
                    ...state.comment,
                    showOnSavingCommentError: action.payload
                }
            }
        }
        case CHANGE_CREATE_BODY_ANN: {
            const titleValid = state.announcement.title.valid;
            const titleAndBodyValid = titleValid && action.payload.valid;
            const showingError = state.announcement.showOnSaveError;
            
            return {
                ...state,
                announcement: {
                    ...state.announcement,
                    isFormValid: titleAndBodyValid,
                    showOnSaveError: showingError && !titleAndBodyValid,
                    body: action.payload
                }
                
            }
        }
        case CHANGE_CREATE_TITLE_ANN: {
            const bodyValid = state.announcement.body.valid;
            const bodyAndTitleValid = bodyValid && action.payload.valid;
            const showingError = state.announcement.showOnSaveError;

            return {
                ...state,
                announcement: {
                    ...state.announcement,
                    isFormValid: bodyAndTitleValid,
                    showOnSaveError: showingError && !bodyAndTitleValid,
                    title: action.payload
                }
                
            }
        }
        case SHOW_ON_SAVING_CREATE_ANN_ERROR: {
            return {
                ...state,
                announcement: {
                    ...state.announcement,
                    showOnSaveError: action.payload
                }
            }
        }
        case INIT_CREATE_ANN: {
            return {
                ...state,
                announcement: initialState.announcement
            }
        }
        case SHOW_ON_SAVING_EDIT_ANN_ERROR: {
            return {
                ...state,
                announcementEdit: {
                    ...state.announcementEdit,
                    showOnSaveError: action.payload
                }
            }
        }
        case INIT_EDIT_ANN: {
            return {
                ...state,
                announcementEdit: {
                    ...state.announcementEdit,
                    title: { 
                        ...state.announcementEdit.title,
                        value: action.payload.title
                    },
                    body: { 
                        ...state.announcementEdit.body,
                        value: action.payload.body
                    }
                }
            }
        }
        case CHANGE_EDIT_BODY_ANN: {
            const titleValid = state.announcementEdit.title.valid;
            const titleAndBodyValid = titleValid && action.payload.valid;
            const showingError = state.announcementEdit.showOnSaveError;
            
            return {
                ...state,
                announcementEdit: {
                    ...state.announcementEdit,
                    isFormValid: titleAndBodyValid,
                    showOnSaveError: showingError && !titleAndBodyValid,
                    body: action.payload
                }
                
            }
        }
        case CHANGE_EDIT_TITLE_ANN: {
            const bodyValid = state.announcementEdit.body.valid;
            const bodyAndTitleValid = bodyValid && action.payload.valid;
            const showingError = state.announcementEdit.showOnSaveError;

            return {
                ...state,
                announcementEdit: {
                    ...state.announcementEdit,
                    isFormValid: bodyAndTitleValid,
                    showOnSaveError: showingError && !bodyAndTitleValid,
                    title: action.payload
                }
                
            }
        }

        default: return state
    }
}

//  POST 
export const initStatePost = () => ({type: INIT_STATE_POST});

export const changePost = (inputControls, isFormValid, showOnSubmitError) => {
    return {
    type: CHANGE_POST, 
    payload: {inputControls, isFormValid, showOnSubmitError}
}};
export const showOnSubmitPostError = showError => ({
    type: SHOW_ON_SUBMIT_POST_ERROR, payload: showError
})


//  POST EDIT
export const initEditPostForm = post => dispatch => {
    const payload = {
        title: post.title,
        body: post.body
    }

    dispatch({type: INIT_EDIT_POST_FORM, payload})
}
export const changePostEdit = (inputControls, isFormValid, showOnSubmitError) => {
    return {
    type: CHANGE_POST_EDIT, 
    payload: {inputControls, isFormValid, showOnSubmitError}
}};
export const showOnSubmitEditPostError = showError => ({
    type: SHOW_ON_SUBMIT_EDIT_POST_ERROR, payload: showError
})


// LOGIN
export const changeLogin = (inputControls, isFormValid, showOnSubmitError) => ({
    type: CHANGE_LOGIN, 
    payload: {inputControls, isFormValid, showOnSubmitError}
});
export const showOnSubmitLoginError = showError => ({
    type: SHOW_ON_SUBMIT_LOGIN_ERROR, payload: showError
})


// REGISTER
export const initialStateRegister = () => ({type: INIT_REGISTER});
export const changeRegister = (inputControls, isFormValid, showOnSubmitError) => ({
    type: CHANGE_REGISTER,
    payload: {inputControls, isFormValid, showOnSubmitError}
})
export const showOnSubmitRegisterError = showError => ({
    type: SHOW_ON_SUBMIT_REGISTER_ERROR, payload: showError
})


// COMMENT

export const changeComment = comment => dispatch => {
    if (comment.valid && comment.showOnSavingCommentError) {
        comment.showOnSavingCommentError = false;
    }

    dispatch({ type: CHANGE_COMMENT, payload: comment });
}

export const initComment = () => ({type: INIT_COMMENT});

export const initCommentEdit = comment => ({
        type: INIT_COMMENT_EDIT,
        payload: comment
})
export const changeCommentEdit = comment => dispatch => {
    if (comment.valid && comment.showOnSavingEditError) {
        comment.showOnSavingEditError = false;
    }

    dispatch({type: CHANGE_COMMENT_EDIT, payload: comment });
}

export const showOnSavingEditErrorMessage = showError => ({
    type: SHOW_ON_SAVING_EDIT_COMMENT_ERROR, payload: showError
})

export const showOnSavingCommentErrorMessage = showError => ({
    type: SHOW_ON_SAVING_COMMENT_ERROR, payload: showError
})

//  Announcement Create
export const changeCreateBody = ann => dispatch => {
    dispatch({type: CHANGE_CREATE_BODY_ANN, payload: ann});
}
export const changeCreateTitle = ann => dispatch => {
    dispatch({type: CHANGE_CREATE_TITLE_ANN, payload: ann});
}

export const showOnSavingCreateAnnError = showError => ({
    type: SHOW_ON_SAVING_CREATE_ANN_ERROR, payload: showError
})

export const initCreateAnnouncement = () => ({type: INIT_CREATE_ANN});

//  Announcement Edit
export const showOnSavingEditAnnError = showError => ({
    type: SHOW_ON_SAVING_EDIT_ANN_ERROR, payload: showError
})

export const onInitEditAnn = ann => ({
    type: INIT_EDIT_ANN, payload: ann
})
export const changeEditBodyAnn = ann => dispatch => {
    dispatch({type: CHANGE_EDIT_BODY_ANN, payload: ann});
}
export const changeEditTitleAnn = ann => dispatch => {
    dispatch({type: CHANGE_EDIT_TITLE_ANN, payload: ann});
}