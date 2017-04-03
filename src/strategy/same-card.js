function action(prefered){
  return prefered && prefered.type ? prefered.type : 1 ;
}

export{action as default};