// ==UserScript==
// @name         nutnComputerRoom
// @namespace    https://www.haward79.tw/
// @version      0.1
// @description  auto fill for nutn computer room
// @author       haward79
// @match        https://system.nutn.edu.tw/ComputerRoom/user/borrow.aspx
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let phone = '0900000000';
let email = 'hello@example.com';
let roomId = 5;
let startTimeId = 11;
let endingTimeId = 11;
let reason = 'Some text ......';

function setValue(id, value)
{

	let obj = document.getElementById(id);

	if(obj != null)
	{
		obj.value = value;
	}

}

function selectValue(id, index)
{
	let select = document.getElementById(id);

	if(select != null)
	{
		let options = select.getElementsByTagName('option');

		if(index >= 0 && index < options.length)
		{
			options[index].selected = "selected";
		}
	}
}

window.addEventListener('load', function ()
{

	setValue('ctl00_ContentPlaceHolder1_txt_tel', phone);
	setValue('ctl00_ContentPlaceHolder1_txt_email', email);
	selectValue('ctl00_ContentPlaceHolder1_lst_room', roomId);
	selectValue('ctl00_ContentPlaceHolder1_lst_section_b', startTimeId);
	selectValue('ctl00_ContentPlaceHolder1_lst_section_e', endingTimeId);
	setValue('ctl00_ContentPlaceHolder1_txt_reason', reason);

});

