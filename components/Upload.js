import Image from 'next/image'
import {useState,useEffect} from 'react'
import ImageKit from "imagekit"
import Loader from './Loader';
import Final from './Final';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function Upload() {
	// body...
	const [path,setPath] = useState('');
	const [url,setUrl] = useState('');
	const [uploading,setUploading] = useState(false);
	const [imgurl,setImgurl] = useState('');
	const [drag,setDrag] = useState(false);
	
	var imagekit = new ImageKit({
	    publicKey : process.env.NEXT_PUBLIC_IMAGEKIT_ID,
	    privateKey : process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE,
	    urlEndpoint : process.env.NEXT_PUBLIC_IMAGEKIT_ENDPOINT
	});



	const pathCheck = (path) =>{
		if(path){
			if(path.split('.').includes('jpg')){
				return true;
			}else if(path.split('.').includes('jpeg')){
				return true;
			}else if(path.split('.').includes('png')){
				return true;
			}
		}
	}

	useEffect(()=>{
		const dropArea = document.getElementById("drag-area");
		const dragText = document.getElementById("header");
		const input = document.getElementById("file1");

		dropArea.onclick = ()=>{
		  input.click();
		}

		dropArea.addEventListener("dragover", (event)=>{
		  event.preventDefault(); 
		  dropArea.classList.add("active");
		  dragText.textContent = "Release to Upload File";
		});

		dropArea.addEventListener("dragleave", ()=>{
		  dropArea.classList.remove("active");
		  dragText.textContent = "Drag & Drop to Upload File";
		});

		dropArea.addEventListener("drop", (event)=>{
			event.preventDefault(); 
			showFile(event.dataTransfer.files[0]);
		});

		
	},[])

	function showFile(file){
		let fileType = file.type; 
		let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
		if(validExtensions.includes(fileType)){
			let fileReader = new FileReader();
			fileReader.onload = ()=>{
			  let fileURL = fileReader.result; 
			  setUrl(fileURL)
			  setDrag(true);
			}
			fileReader.readAsDataURL(file);
		}else{
			toast("This is not an Image File!",toastOption);
			dropArea.classList.remove("active");
			dragText.textContent = "Drag & Drop to Upload File";
		}
	}

	useEffect(()=>{
		const image_input = document.querySelector('#file1');
		if(image_input){

		image_input.addEventListener('change',()=>{
			const reader = new FileReader();
		
			reader.addEventListener('load',()=>{
				let uploaded_image = reader.result;
				setUrl(uploaded_image);		
			});
			reader.readAsDataURL(image_input.files[0]);
			})
		}
	
	},[path])

	const upload2 = () =>{
		setUploading(true)
				// e.preventDefault();
				imagekit.upload({
			    file : url, //required
			    fileName : "thejashari",   //required
			    extensions: [
			        {
			            name: "google-auto-tagging",
			            maxTags: 5,
			            minConfidence: 95
			        }
			    ]
				}).then(response => {
				    setImgurl(response.url);
				    setUploading(false)
				}).catch(error => {
				    console.log(error.message);
				});
	}

	const upload = () =>{
		if(url.length > 2 && !drag){
			if(pathCheck(path)){
				setUploading(true)
				// e.preventDefault();
				imagekit.upload({
			    file : url, //required
			    fileName : "thejashari",   //required
			    extensions: [
			        {
			            name: "google-auto-tagging",
			            maxTags: 5,
			            minConfidence: 95
			        }
			    ]
				}).then(response => {
				    setImgurl(response.url);
				    setUploading(false)
				}).catch(error => {
				    console.log(error.message);
				});
			}else{
				toast('Please Select an Image',toastOption);
			}  
		}else{
			if(url.length>2){
				upload2()
			}
		}
	}

	// useEffect(()=>{
		
	// },[uploading])
		if(uploading){
			return <Loader />
		}
		if(imgurl){
			return <Final imgurl={imgurl} />
		}
	const toastOption={
		position:"bottom-right",
		autoClose:8800,
		pauseOnHover:true,
		draggable:true,
		theme:"dark",
	}

	return(
		<div className="flex py-10 rounded-3xl bg-white flex-col mx-auto shadow-2xl w-[93%] items-center justify-center "> 
			<h2 className="text-xl font-semibold">Upload your image</h2>
			<p className="text-gray-500 mt-7 font-semibold text-sm" >File should be JPEG,JPG,PNG....</p>
			<div
			id="drag-area"
			className="p-5 border-2 w-[85%] md:w-[55%] mt-7 md:mt-10 border-dashed border-sky-500 bg-blue-100/20 rounded-2xl flex items-center justify-center flex-col">	
				<Image src={url ? url : "https://ik.imagekit.io/d3kzbpbila/creative-mountains-sunrise-logo-design-symbol-illustration-creative-mountains-sunrise-logo-124611961-removebg-preview_qStGXj2RA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668007930493"}
				width="20000" height="10" object="cover" alt="" className="rounded-2xl"/>	
				{
					url ?
					""
					:
					<h2 className="font-semibold text-sm text-gray-400" id="header">Drag & drop your files here</h2>		
				}		
				
			</div>

			<p className="mt-5 text-gray-400 font-semibold">{url ? "Preview" : "or"}</p>
			<label htmlFor="file1" id="label_input" 
			onClick={upload}
			className="flex z-20 mt-7">
					<div className="z-0 " >
					<p className="bg-blue-700 px-5 py-2 text-white font-semibold text-md rounded-2xl 
					active:scale-95 hover:scale-110 transition duration-400 ease-out">{ url ? "Get CDN" :"Choose a file"}</p>
					</div>
				<input type={url ? "disabled" :"file"} id="file1" accept="image/*" 
				value={path}
				onChange={(e)=>setPath(e.target.value)}
				hidden
				/>
			</label>
			<ToastContainer/>
		</div>
	)
}