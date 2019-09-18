import React from 'react';
import styles from './FormsControls.module.css';


// const FormControl = ( { input, meta, child, ...props } ) => {
//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={ styles.formControl + " " + ( hasError && styles.error ) }>
//             <div>
//                 { props.child }
//             </div>
//             { hasError && <span>{ meta.error }</span>  }  
//         </div>  
//     )
// }

export const Textarea = ( { input, meta, ...props } ) => {
    return (
        <div className={ styles.formControl + " " + ( meta.touched && meta.error && styles.error ) }>
            <div>
                <textarea { ...input } { ...props }/>
            </div>
            { meta.touched && meta.error && <span>{ meta.error }</span> }
        </div>
        // <FormControl { ...props }><textarea { ...input } { ...props }/></FormControl>
    )
};

export const Input = ( { input, meta, ...props } ) => {
    return (
        <div className={ styles.formControl + " " + ( meta.touched && meta.error && styles.error ) }>
            <div>
                <input { ...input } { ...props }/>
            </div>
            { meta.touched && meta.error && <span>{ meta.error }</span> }
        </div>
    )
};