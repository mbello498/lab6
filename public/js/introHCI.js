'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);


}

var idNumber;
/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();
	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	idNumber = projectID.substr('project'.length);

	// make the ajax call
	// addProject does not exist
	//$.get("/project/random", addProject);
	// or
	//$.get("/project/'idNumber, addProject);
    // or
    // $.get("/project/idNumber", addProject);
    $.get("/project/" + idNumber, addProject);
    console.log("/project/" + idNumber);
	console.log("User clicked on project " + idNumber);
}


// callback function
function addProject(result) {
    // might need to change this based off our specific json
    var projectHTML = '<a href="#" class="thumbnail">' +
        '<img src="' + result['image'] + '" class="detailsImage">' +
        '<p>' + result['title'] + '</p>' +
        '<p><small>' + result['date'] +
        '</small></p></a>' +
        '<p>' + result['summary'] + '</p>'

    console.log("this is projectHTML: " + projectHTML);

    //$("#project-container").html(projectHTML);
    //$(".project" + idNumber).html(projectHTML);
    //$("a[href$='#']").html(projectHTML);
    //$(".project.thumbnail").html(projectHTML);
    $("#project" + result.id + " .details").html(projectHTML);
    console.log("this is result summary: " + result['summary']);

}