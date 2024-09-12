mload (){
	mongoimport --jsonArray --file=$1
}

mload "members.json"
mload "studentApplyFaq.json"
