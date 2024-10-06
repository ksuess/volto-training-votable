"use strict";(self.webpackChunk_plone_volto=self.webpackChunk_plone_volto||[]).push([[9632],{"./src/components/manage/Controlpanels/Users/UserGroupMembershipControlPanel.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return UserGroupMembershipControlPanel}});var find=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/find.js"),find_default=__webpack_require__.n(find),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_dom=__webpack_require__("../../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),react_router=__webpack_require__("../../../node_modules/.pnpm/react-router@5.2.0_react@18.2.0/node_modules/react-router/esm/react-router.js"),react_router_dom=__webpack_require__("../../../node_modules/.pnpm/react-router-dom@5.2.0_react@18.2.0/node_modules/react-router-dom/esm/react-router-dom.js"),useIntl=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/components/useIntl.js"),message=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/components/message.js"),es=__webpack_require__("../../../node_modules/.pnpm/react-redux@8.1.2_@types+react-dom@18.2.12_@types+react@18.2.27_react-dom@18.2.0_react@18.2.0__react@18.2.0_redux@4.2.1/node_modules/react-redux/es/index.js"),Segment=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Segment/Segment.js"),helpers=__webpack_require__("./src/helpers/index.js"),src_actions=__webpack_require__("./src/actions/index.js"),components=__webpack_require__("./src/components/index.js"),debounce=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/debounce.js"),debounce_default=__webpack_require__.n(debounce),isEqual=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isEqual.js"),isEqual_default=__webpack_require__.n(isEqual),Form=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/collections/Form/Form.js"),Input=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Input/Input.js"),Checkbox=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/modules/Checkbox/Checkbox.js"),objectSpread2=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.6/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),uniqBy=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/uniqBy.js"),uniqBy_default=__webpack_require__.n(uniqBy),cloneDeep=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/cloneDeep.js"),cloneDeep_default=__webpack_require__.n(cloneDeep),lib=__webpack_require__("../../../node_modules/.pnpm/jwt-decode@2.2.0/node_modules/jwt-decode/lib/index.js"),lib_default=__webpack_require__.n(lib),react_toastify=__webpack_require__("../../../node_modules/.pnpm/react-toastify@5.5.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-toastify/esm/react-toastify.js"),Button=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Button/Button.js"),down_key=__webpack_require__("./src/icons/down-key.svg"),down_key_default=__webpack_require__.n(down_key),__jsx=react.createElement;const ListingTemplate=({query_user:query_user,query_group:query_group,groups_filter:groups_filter,add_joined_groups:add_joined_groups,many_users:many_users,many_groups:many_groups})=>{var _matrix_options,_matrix_options2,_matrix_options3;const intl=(0,useIntl.c)(),dispatch=(0,es.useDispatch)(),{0:userLimit,1:setUserLimit}=(0,react.useState)(25),token=(0,es.useSelector)((state=>state.userSession.token),es.shallowEqual),user=(0,es.useSelector)((state=>state.users.user)),userId=token?lib_default()(token).sub:"";(0,react.useEffect)((()=>{dispatch((0,src_actions.eg)(userId))}),[dispatch,userId]);const isUserManager=(0,helpers.YH)(user);let items=(0,es.useSelector)((state=>state.users.users)),show_users=!many_users||many_users&&query_user.length>1||many_users&&groups_filter.length>0;show_users?items.sort((function(a,b){var labelA=a.fullname&&a.fullname.split(" ").reverse().join(" ")||a.id,labelB=b.fullname&&b.fullname.split(" ").reverse().join(" ")||b.id;return labelA<labelB?-1:labelA>labelB?1:0})):items=[];let groups=(0,es.useSelector)((state=>state.groups.groups));let matrix_options,show_matrix_options=!many_groups||many_groups&&query_group.length>1||groups_filter.length>0||add_joined_groups;show_matrix_options?(matrix_options=!many_groups||many_groups&&query_group.length>1?cloneDeep_default()(groups):[],add_joined_groups&&items.map((item=>(matrix_options.push(...item.groups.items),item.groups.items))),matrix_options=matrix_options.map((group=>({value:group.id,label:group.title||`${group.id}`}))),groups_filter.length>0&&(matrix_options=groups_filter.concat(matrix_options)),matrix_options=uniqBy_default()(matrix_options,(x=>x.value)),matrix_options=matrix_options.filter((group=>"AuthenticatedUsers"!==group.value)),matrix_options.sort((function(a,b){var labelA=a.label.toUpperCase(),labelB=b.label.toUpperCase();return labelA<labelB?-1:labelA>labelB?1:0})),matrix_options=matrix_options.map((matrix_option=>{return(0,objectSpread2.c)((0,objectSpread2.c)({},matrix_option),{},{roles:(group_id=matrix_option.value,(null===(_groups$find=groups.find((group=>group.id===group_id)))||void 0===_groups$find?void 0:_groups$find.roles)||[])});var group_id,_groups$find}))):matrix_options=[];const debouncedListUsers=(0,react.useMemo)((()=>debounce_default()(((query_user,groups_filter,userLimit)=>{dispatch((0,src_actions.Cq)({search:query_user,groups_filter:groups_filter.map((el=>el.value)),limit:userLimit}))}),300)),[dispatch]);(0,react.useEffect)((()=>{show_users&&debouncedListUsers(query_user,groups_filter,userLimit)}),[debouncedListUsers,query_user,groups_filter,show_users,userLimit]);const debouncedListGroups=(0,react.useMemo)((()=>debounce_default()((query_group=>{dispatch((0,src_actions.Ud)(query_group))}),300)),[dispatch]);(0,react.useEffect)((()=>{show_matrix_options&&debouncedListGroups(query_group)}),[debouncedListGroups,query_group,show_matrix_options]);return __jsx("div",{className:"administration_matrix"},matrix_options&&(null===(_matrix_options=matrix_options)||void 0===_matrix_options?void 0:_matrix_options.length)>0&&__jsx("div",{className:"label-options"},__jsx("div",{className:"target-labels"},__jsx("div",null,__jsx("h3",null,items.length," users")),__jsx("div",null,null===(_matrix_options2=matrix_options)||void 0===_matrix_options2?void 0:_matrix_options2.map((matrix_option=>__jsx("div",{className:"label-options-label inclined",key:matrix_option.value},__jsx("div",null,__jsx("span",{className:"label"},matrix_option.label))))))),__jsx("div",{className:"listing-row selectall",key:"selectall"},__jsx("div",{className:"listing-item"},__jsx("div",null),__jsx("div",{className:"matrix_options"},null===(_matrix_options3=matrix_options)||void 0===_matrix_options3?void 0:_matrix_options3.map((matrix_option=>__jsx("div",{key:matrix_option.value},__jsx(Checkbox.c,{className:"toggle-target",defaultChecked:!1,onChange:(_event,{checked:checked})=>((group,items_ids,checked)=>{let usersgroupmapping={};items_ids.forEach((el=>{usersgroupmapping[el]=!!checked})),dispatch((0,src_actions.Gy)(group,{users:usersgroupmapping})).then((()=>{dispatch((0,src_actions.Cq)({search:query_user,groups_filter:groups_filter.map((el=>el.value)),limit:userLimit}))})).then((()=>{react_toastify.toast.success(__jsx(components.qAm,{success:!0,title:intl.formatMessage(helpers.cJ.success),content:intl.formatMessage(helpers.cJ.membershipUpdated)}))}))})(matrix_option.value,items.map((el=>el.id)),checked),disabled:!(0,helpers.Gm)(isUserManager,matrix_option)})))))))),__jsx("div",{className:"items"},items.length>0?__jsx(react.Fragment,null,items.map((item=>{var _item$fullname,_matrix_options4;return __jsx("div",{className:"listing-row",key:item.id,id:`source-row-${item.id}`},__jsx("div",{className:"listing-item",key:item["@id"]},__jsx("div",null,__jsx("h4",{title:`${item.fullname} ${item.id}`},(null===(_item$fullname=item.fullname)||void 0===_item$fullname?void 0:_item$fullname.length)>25?item.fullname.slice(0,22)+"...":item.fullname||item.id)),__jsx("div",{className:"matrix_options"},null===(_matrix_options4=matrix_options)||void 0===_matrix_options4?void 0:_matrix_options4.map((matrix_option=>{var _item$groups,_item$groups$items;return __jsx(Checkbox.c,{className:`checkbox_${matrix_option.value}`,key:matrix_option.value,title:matrix_option.title,checked:null===(_item$groups=item.groups)||void 0===_item$groups||null===(_item$groups$items=_item$groups.items)||void 0===_item$groups$items?void 0:_item$groups$items.map((el=>el.id)).includes(matrix_option.value),onChange:(_event,{checked:checked})=>{((selectedvalue,checked,singleClick)=>{var _singleClick;singleClick=null!==(_singleClick=singleClick)&&void 0!==_singleClick&&_singleClick;let group=selectedvalue.y,username=selectedvalue.x;dispatch((0,src_actions.Gy)(group,{users:{[username]:!!checked}})).then((()=>{singleClick&&dispatch((0,src_actions.Cq)({search:query_user,groups_filter:groups_filter.map((el=>el.value)),limit:userLimit}))})).then((()=>{singleClick&&react_toastify.toast.success(__jsx(components.qAm,{success:!0,title:intl.formatMessage(helpers.cJ.success),content:intl.formatMessage(helpers.cJ.membershipUpdated)}))}))})({y:matrix_option.value,x:item.id},checked,!0)},disabled:!(0,helpers.Gm)(isUserManager,matrix_option)})})))))})),items.length<25?null:__jsx("div",{className:"show-more"},__jsx(Button.c,{icon:!0,basic:!0,onClick:()=>setUserLimit(userLimit+25),className:"show-more-button"},__jsx(components.GWx,{name:down_key_default(),size:"30px"})))):__jsx("div",null,intl.formatMessage(show_users&&query_user?helpers.cJ.noUserFound:helpers.cJ.pleaseSearchOrFilterUsers))))};var UserGroupMembershipListing=ListingTemplate;ListingTemplate.__docgenInfo={description:"",methods:[],displayName:"ListingTemplate"};var UserGroupMembershipMatrix_jsx=react.createElement;const UserGroupMembershipMatrix=({many_users:many_users,many_groups:many_groups})=>{var _filter_options;const intl=(0,useIntl.c)(),dispatch=(0,es.useDispatch)(),{0:query_user,1:setQuery_user}=(0,react.useState)(""),{0:query_group,1:setQuery_group}=(0,react.useState)(""),{0:query_group_filter,1:setQuery_group_filter}=(0,react.useState)(""),{0:groups_filter,1:setGroups_filter}=(0,react.useState)([]),{0:add_joined_groups,1:setAdd_joined_groups}=(0,react.useState)(!1);let filter_options=(0,es.useSelector)((state=>state.groups.filter_groups));filter_options&&(filter_options=filter_options.map((group=>({value:group.id,label:group.title||group.id}))),filter_options.sort((function(a,b){var labelA=a.label.toUpperCase(),labelB=b.label.toUpperCase();return labelA<labelB?-1:labelA>labelB?1:0})));const debouncedListGroups=(0,react.useMemo)((()=>debounce_default()((query_group_filter=>{dispatch((0,src_actions.Ud)("",query_group_filter))}),300)),[dispatch]);(0,react.useEffect)((()=>{(!many_groups||many_groups&&query_group_filter.length>1)&&debouncedListGroups(query_group_filter)}),[debouncedListGroups,many_groups,query_group_filter]);const onReset=event=>{let element=event.target.querySelector("input");switch(element.value="",element.focus(),element.name){case"SearchUser":setQuery_user("");break;case"SearchGroup":setQuery_group("");break;case"SearchGroupFilter":setQuery_group_filter(""),setGroups_filter([])}},onChangeSearchUsers=event=>{many_users||many_groups?13===event.keyCode&&(setQuery_user(event.target.value),event.preventDefault()):setQuery_user(event.target.value)},onChangeSearchGroups=event=>{many_users||many_groups?13===event.keyCode&&(setQuery_group(event.target.value),event.preventDefault()):setQuery_group(event.target.value)},onChangeSearchGroupsFilter=event=>{many_users||many_groups?13===event.keyCode&&(setQuery_group_filter(event.target.value),event.preventDefault()):setQuery_group_filter(event.target.value)};return UserGroupMembershipMatrix_jsx("div",{className:"controlpanel_matrix"},UserGroupMembershipMatrix_jsx("div",{className:"controlpanel_search_wrapper"},UserGroupMembershipMatrix_jsx("div",{className:"controlpanel_search_y"},UserGroupMembershipMatrix_jsx(Form.c,{className:"search_users",onSubmit:onReset},UserGroupMembershipMatrix_jsx(Form.c.Field,null,UserGroupMembershipMatrix_jsx(Input.c,{name:"SearchUser",action:{icon:"delete"},placeholder:intl.formatMessage(helpers.cJ.searchUsers),onChange:onChangeSearchUsers,onKeyDown:onChangeSearchUsers,id:"user-search-input"})))),UserGroupMembershipMatrix_jsx("div",{className:"controlpanel_search_x"},UserGroupMembershipMatrix_jsx(Form.c,{className:"search_groups",onSubmit:onReset},UserGroupMembershipMatrix_jsx(Form.c.Field,null,UserGroupMembershipMatrix_jsx(Input.c,{name:"SearchGroup",action:{icon:"delete"},placeholder:intl.formatMessage(helpers.cJ.searchGroups),onChange:onChangeSearchGroups,onKeyDown:onChangeSearchGroups,id:"group-search-input"})),UserGroupMembershipMatrix_jsx(Form.c.Field,null,UserGroupMembershipMatrix_jsx(Checkbox.c,{name:"addJoinedGroups",label:intl.formatMessage(helpers.cJ.addJoinedGroups),title:intl.formatMessage(helpers.cJ.addJoinedGroups),defaultChecked:!1,onChange:(event,{checked:checked})=>{(checked=>{setAdd_joined_groups(checked)})(checked)}}))))),UserGroupMembershipMatrix_jsx("div",{className:"controlpanel_listing_wrapper"},UserGroupMembershipMatrix_jsx("div",{className:"controlpanel_filter"},UserGroupMembershipMatrix_jsx("h3",null,intl.formatMessage(helpers.cJ.filterByGroups)),UserGroupMembershipMatrix_jsx(Form.c,{className:"search_filter_groups",onSubmit:onReset},UserGroupMembershipMatrix_jsx(Form.c.Field,null,UserGroupMembershipMatrix_jsx(Input.c,{name:"SearchGroupFilter",action:{icon:"delete"},placeholder:intl.formatMessage(helpers.cJ.searchGroups),onChange:onChangeSearchGroupsFilter,onKeyDown:onChangeSearchGroupsFilter,id:"groupfilter-search-input"}))),(!many_groups||query_group_filter.length>1)&&(null===(_filter_options=filter_options)||void 0===_filter_options?void 0:_filter_options.map((filter_option=>UserGroupMembershipMatrix_jsx(Form.c.Field,null,UserGroupMembershipMatrix_jsx(Checkbox.c,{name:`filter_option_${filter_option.value}`,key:filter_option.value,title:filter_option.label,label:filter_option.label,defaultChecked:!1,onChange:(event,{checked:checked})=>{((filter_option,checked)=>{let groups_filter_set_new=[];groups_filter_set_new=checked?new Set([...groups_filter,filter_option]):groups_filter.filter((el=>el.value!==filter_option.value)),isEqual_default()(groups_filter_set_new,new Set(groups_filter))||setGroups_filter([...groups_filter_set_new])})(filter_option,checked)}})))))),UserGroupMembershipMatrix_jsx(UserGroupMembershipListing,{query_user:query_user,query_group:query_group,groups_filter:groups_filter,add_joined_groups:add_joined_groups,many_users:many_users,many_groups:many_groups})))};var Users_UserGroupMembershipMatrix=UserGroupMembershipMatrix;UserGroupMembershipMatrix.__docgenInfo={description:"",methods:[],displayName:"UserGroupMembershipMatrix"};var back=__webpack_require__("./src/icons/back.svg"),back_default=__webpack_require__.n(back),settings=__webpack_require__("./src/icons/settings.svg"),settings_default=__webpack_require__.n(settings),UserGroupMembershipControlPanel_jsx=react.createElement;const UserGroupMembershipPanel=()=>{const intl=(0,useIntl.c)(),history=(0,react_router.Uz)(),pathname=(0,react_router.IT)().pathname,dispatch=(0,es.useDispatch)(),many_users=(0,es.useSelector)((state=>{var _state$controlpanels$,_state$controlpanels$2;return null===(_state$controlpanels$=state.controlpanels.controlpanel)||void 0===_state$controlpanels$||null===(_state$controlpanels$2=_state$controlpanels$.data)||void 0===_state$controlpanels$2?void 0:_state$controlpanels$2.many_users})),many_groups=(0,es.useSelector)((state=>{var _state$controlpanels$3,_state$controlpanels$4;return null===(_state$controlpanels$3=state.controlpanels.controlpanel)||void 0===_state$controlpanels$3||null===(_state$controlpanels$4=_state$controlpanels$3.data)||void 0===_state$controlpanels$4?void 0:_state$controlpanels$4.many_groups})),systeminformation=(0,es.useSelector)((state=>state.controlpanels.systeminformation)),can_use_group_membership_panel=!!systeminformation&&parseFloat(null==systeminformation?void 0:systeminformation.plone_restapi_version.slice(0,4))>=8.24,actions=(0,es.useSelector)((state=>{var _state$actions$action,_state$actions;return null!==(_state$actions$action=null===(_state$actions=state.actions)||void 0===_state$actions?void 0:_state$actions.actions)&&void 0!==_state$actions$action?_state$actions$action:{}})),ploneSetupAction=find_default()(actions.user,{id:"plone_setup"}),{0:isClient,1:setIsClient}=(0,react.useState)(!1);return(0,react.useEffect)((()=>{setIsClient(!0)}),[]),(0,react.useEffect)((()=>{dispatch((0,src_actions.KC)("/"))}),[dispatch]),(0,react.useEffect)((()=>{dispatch((0,src_actions.Gm)("usergroup"))}),[dispatch]),(0,react.useEffect)((()=>{dispatch((0,src_actions._d)())}),[dispatch]),isClient&&!ploneSetupAction?UserGroupMembershipControlPanel_jsx(components.GsG,null):UserGroupMembershipControlPanel_jsx(react.Fragment,null,UserGroupMembershipControlPanel_jsx("div",{className:"users-control-panel"},UserGroupMembershipControlPanel_jsx(helpers.So,{title:intl.formatMessage(helpers.cJ.usergroupmemberbership)}),UserGroupMembershipControlPanel_jsx(Segment.c.Group,{raised:!0},UserGroupMembershipControlPanel_jsx(Segment.c,{className:"primary"},intl.formatMessage(helpers.cJ.usergroupmemberbership)),can_use_group_membership_panel&&void 0!==many_users&&void 0!==many_groups?many_users||many_groups?UserGroupMembershipControlPanel_jsx(react.Fragment,null,UserGroupMembershipControlPanel_jsx(Segment.c,{secondary:!0},UserGroupMembershipControlPanel_jsx(message.c,{id:"InfoUserGroupSettings",defaultMessage:"You have selected the option 'many users' or 'many groups'. Thus this control panel asks for input to show users and groups. If you want to see users and groups instantaneous, head over to user group settings. See the button on the left."})),UserGroupMembershipControlPanel_jsx(Segment.c,{className:"usergroupmembership"},UserGroupMembershipControlPanel_jsx(Users_UserGroupMembershipMatrix,{many_users:many_users,many_groups:many_groups}))):UserGroupMembershipControlPanel_jsx(Segment.c,{className:"usergroupmembership"},UserGroupMembershipControlPanel_jsx(Users_UserGroupMembershipMatrix,{many_users:many_users,many_groups:many_groups})):UserGroupMembershipControlPanel_jsx(Segment.c,{secondary:!0,className:"usergroupmembership upgrade-info"},UserGroupMembershipControlPanel_jsx("div",null,UserGroupMembershipControlPanel_jsx(message.c,{id:"Please upgrade to plone.restapi >= 8.24.0.",defaultMessage:"Please upgrade to plone.restapi >= 8.24.0."}))))),isClient&&(0,react_dom.createPortal)(UserGroupMembershipControlPanel_jsx(components.YT3,{pathname:pathname,hideDefaultViewButtons:!0,inner:UserGroupMembershipControlPanel_jsx(react.Fragment,null,UserGroupMembershipControlPanel_jsx(react_router_dom.cH,{className:"item",to:"#",onClick:()=>{history.push((0,helpers.yn)(pathname))}},UserGroupMembershipControlPanel_jsx(components.GWx,{name:back_default(),className:"contents circled",size:"30px"})),UserGroupMembershipControlPanel_jsx(react_router_dom.cH,{to:"/controlpanel/usergroup",className:"usergroup"},UserGroupMembershipControlPanel_jsx(components.GWx,{name:settings_default(),className:"circled","aria-label":intl.formatMessage(helpers.cJ.usergroup),size:"30px",title:intl.formatMessage(helpers.cJ.usergroup)})))}),document.getElementById("toolbar")))};var UserGroupMembershipControlPanel=UserGroupMembershipPanel;UserGroupMembershipPanel.__docgenInfo={description:"",methods:[],displayName:"UserGroupMembershipPanel"}}}]);