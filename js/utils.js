/* Shared runtime helpers extracted from the monolithic page. */
export const CL_CLOUD='dbljkloal';
export const CL_PRESET='Everything';
export const CL_URL=`https://api.cloudinary.com/v1_1/${CL_CLOUD}/image/upload`;
export const fontPolicy={family:'Pretendard',letterSpacing:'-.02em'};
export function lbArr(arr){return JSON.stringify(arr).replace(/"/g,'&quot;');}
export async function uploadCloud(file){const fd=new FormData();fd.append('file',file);fd.append('upload_preset',CL_PRESET);try{const r=await fetch(CL_URL,{method:'POST',body:fd});if(!r.ok)throw new Error('upload failed');const d=await r.json();return d.secure_url||null;}catch(e){return null;}}
export function age(b){if(!b)return'';const bd=new Date(b),today=new Date();let a=today.getFullYear()-bd.getFullYear();if(today.getMonth()<bd.getMonth()||(today.getMonth()===bd.getMonth()&&today.getDate()<bd.getDate()))a--;return a+'세';}
export function emoji(name){const e=['🌸','⭐','🌙','💫','🎵','🎀','🌟','💜','🎤','✨'];let h=0;for(let i=0;i<(name||'').length;i++)h+=name.charCodeAt(i);return e[h%e.length];}
