import React,{Component} from 'react'
//引入axios 
import Axios from './../utils/globaljs/ajax.js'

//写一下样式
const StyleCss = {
    TouXiangApp:{
        divImg:{
            width:'1.5rem',
            height:'1.5rem',
            borderRadius:'50%',
            background:'red',
            margin:'.5rem auto',
            overflow:'hidden'
        },
        inputFile:{
            display:'none'
        },
        yuLan:{
            width:'100px',
            height:'30px',
            position:'absolute',
            left:'0',
            right:'0',
            margin:'auto',
            marginTop:'.1rem',
        }
    }
}


export default class TouXiangApp extends Component {
    state={
        ImgSrc:''
    }
    imgClick=()=>{
        this.refs.imgInput.click()
    }
    changeFlie=()=>{
        let fileImg = this.refs.imgInput.files[0]
        //创建formData数据
        const Data = new FormData()
        Data.append('avatal',fileImg) //设置上传至接口的数据
        Axios({
            url:'/react/uploadimg',
            method:'POST',
            contentType:false,
            processData:false,
            data:Data
        }).then(res=>{
            if(res.data.type===1){
                console.log(res.data.result)
                this.setState({
                    ImgSrc:res.data.result
                })
                console.log(this.state.ImgSrc)
            }else{
                alert('上传失败')
            }
        })
    }
    render(){
        let ImgSrcNew = this.state.ImgSrc.replace(/public/,'http://localhost:1228')
        return (
            <div>
                <div style={StyleCss.TouXiangApp.divImg}>
                    <img src={ImgSrcNew}  alt=""
                    style={{width:'100%',height:'100%'}}
                    onClick={this.imgClick}/>
                </div>
                <input type="file" 
                style={StyleCss.TouXiangApp.inputFile} 
                accept="image/*"
                onChange={this.changeFlie}
                ref="imgInput" />
                <button style={StyleCss.TouXiangApp.yuLan}>预览</button>
            </div>
        )
    }
}

//接下来做预览功能