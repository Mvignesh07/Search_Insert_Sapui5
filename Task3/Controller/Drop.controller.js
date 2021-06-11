var oDropController;
sap.ui.controller("Task3.Controller.Drop", 
{
	onInit : function ()  {
		oDropController=this;
		console.log("On Init");
	},
	onAfterRendering: function(){
		
		console.log("On After Rendering");
		oDropController.setProductDetail();
		oDropController.CreatePlannedAndActualGraph();
		oDropController.CreatePlanned();
		oDropController.CreatePlanne();
		oDropController.CreatePie();
		
                      
		
                      
		
	},


      setProductDetail : function(){
		var productDetail;
		var url = "/XMII/Illuminator?QueryTemplate=SMT_TRAINING/Vignesh/TASKS/SQL_DropDown&Content-Type=text/json"

		$.ajax({
			url: url,
			type: "POST",
			success: function (data, txt, jqXHR) {
				if(data.Rowsets.Rowset != undefined){
					productDetail = data.Rowsets.Rowset[0].Row
					var oModel = new sap.ui.model.json.JSONModel(productDetail);
					oDropController.getView().setModel(oModel);
                                                          
					//combo start
					var oComboBox = oDropController.getView().byId("productInput");
					oComboBox.setModel(oModel);
					var oItemTemplate = new sap.ui.core.Item({
			 			text : '{Id}' 
					});
					oComboBox.bindItems("/", oItemTemplate);
					
				
   
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
			}
		});
	},


SearchRecord : function(){
		var userInput = oDropController.getView().byId("productInput").getValue();
		
		if(userInput==""){
			sap.m.MessageToast.show("Please Enter Valid Id" );
			return
		}
		var productDetail;
		var url = "/XMII/Illuminator?QueryTemplate=SMT_TRAINING/Vignesh/TASKS/Task3/SQL_Task3_Search&Content-Type=text/json&Param.1="+userInput

		$.ajax({
			url: url,
			type: "POST",
			success: function (data, txt, jqXHR) {
				if(data.Rowsets.Rowset != undefined){
					productDetail = data.Rowsets.Rowset[0].Row
					var oModel = new sap.ui.model.json.JSONModel(productDetail);
					oDropController.getView().setModel(oModel);
                                                                     
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
			}
		});
		
	}, 


          DeleteRecord : function(){
		var userInput = oDropController.getView().byId("productInput").getValue();
		
		if(userInput==""){
			sap.m.MessageToast.show("Please Enter Valid Id" );
			return
		}
		var productDetail;
		var url = "/XMII/Illuminator?QueryTemplate=SMT_TRAINING/Vignesh/TASKS/Task3/SQL_Task3_Delete&Content-Type=text/json&Param.1="+userInput

		$.ajax({
			url: url,
			type: "POST",
			success: function (data, txt, jqXHR) {
				if(data.Rowsets.Rowset != undefined){
					productDetail = data.Rowsets.Rowset[0].Row
					var oModel = new sap.ui.model.json.JSONModel(productDetail);
					oDropController.getView().setModel(oModel);
                                                                     
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
			}
		});
		
	},


                 UpdateRecord : function(){
		var userInput1= oDropController.getView().byId("productInput").getValue();
   	            var userInput2 = oDropController.getView().byId("EmpAge").getValue();
                        var userInput3 = oDropController.getView().byId("EmpNumber").getValue();
                      
		if(userInput1=="" || userInput2=="" || userInput3 == "" || userInput3.length != 10) {
			sap.m.MessageToast.show("Please Enter Employee Id, Age and 10 Digit Mobile Number");
			return
		}
		
		var productDetail;
		var url = "/XMII/Illuminator?QueryTemplate=SMT_TRAINING/Vignesh/TASKS/Task3/SQL_TASK3_Update&Content-Type=text/json&Param.1="+userInput2+"&Param.2="+userInput1+"&Param.3="+userInput3

		$.ajax({
			url: url,
			type: "POST",
			success: function (data, txt, jqXHR) {
				if(data.Rowsets.Rowset != undefined){
					productDetail = data.Rowsets.Rowset[0].Row;
					var oModel = new sap.ui.model.json.JSONModel(productDetail);
					oDropController.getView().setModel(oModel);
                                                                     
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
			}
		});
		
	},


 Insert : function(){
		var u1= oDropController.getView().byId("i1").getValue();
   	            var u2 = oDropController.getView().byId("i2").getValue();
		 var u3 = oDropController.getView().byId("i3").getValue();
                       var u4 = oDropController.getView().byId("i4").getValue();
                        var u5 = oDropController.getView().byId("i5").getValue();
	           var u6 = oDropController.getView().byId("i6").getValue();

		if(u1=="" || u2=="" || u3 =="" || u4=="" || u5=="" || u6==""){
			sap.m.MessageToast.show("Please Enter  Valid Employee Details");
			return
		}
		
		var productDetail;
		var url = "/XMII/Illuminator?QueryTemplate=SMT_TRAINING/Vignesh/TASKS/Task3/SQL_Task3_Insert&Content-Type=text/json&Param.1="+u1+"&Param.2="+u2+"&Param.3="+u3+"&Param.4="+u4+"&Param.5="+u5+"&Param.6="+u6

		$.ajax({
			url: url,
			type: "POST",
			success: function (data, txt, jqXHR) {
				if(data.Rowsets.Rowset != undefined){
					productDetail = data.Rowsets.Rowset[0].Row;
					var oModel = new sap.ui.model.json.JSONModel(productDetail);
					oDropController.getView().setModel(oModel);
                                                                     
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
			}
		});
		
	},
	
	
 CreatePlannedAndActualGraph : function() {	


		var url = "/XMII/Illuminator?QueryTemplate=SMT_TRAINING/Vignesh/TASKS/SQL_DropDown&Content-Type=text/json"
var productDetail;
		$.ajax({
			url: url,
			type: "POST",
			async : false,
			success: function (data, txt, jqXHR) {
				if(data.Rowsets.Rowset != undefined){
					productDetail = data.Rowsets.Rowset[0].Row
					var oModel = new sap.ui.model.json.JSONModel(productDetail);
					oDropController.getView().setModel(oModel);
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
			}
		});
		var oVizFrame = oDropController.getView().byId("idPlannedAndActualVizFrame");
		oVizFrame.setVizType("stacked_column");
		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
			dimensions: [{
				name: "Id",
				value: "{Id}"
			}],
			measures: [{
				name: 'StreetNo',
				value: "{StreetNo}"
			},{
				name: 'Age',
				value: "{Age}"
			}],
			data: {
				path: "/"
			}
		});
		oVizFrame.setDataset(oDataset);

		var feedValueAxis0 = new sap.viz.ui5.controls.common.feeds.FeedItem({
			"uid": "valueAxis",
			"type": "Measure",
			"values": ["StreetNo"]
		}),
		feedValueAxis1 = new sap.viz.ui5.controls.common.feeds.FeedItem({
			"uid": "valueAxis",
			"type": "Measure",
			"values": ["Age"]
		}),
		feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
			"uid": "categoryAxis",
			"type": "Dimension",
			"values": ["Id"]
		});
		oVizFrame.addFeed(feedValueAxis0);
		oVizFrame.addFeed(feedValueAxis1);
		oVizFrame.addFeed(feedCategoryAxis);

		oVizFrame.setVizProperties({
			plotArea: {
					colorPalette: ['#FFFB00','#3380FF'],
					dataLabel: {showTotal: true,visible:true,hideWhenOverlap:true},
					//dataShape: {primaryAxis: ["bar", "bar"]}
				   },
				   legend: {visible: true},
				   legendGroup: {
					   layout: { position: "top"}
				   },
			valueAxis: {label: { },title: {visible: false}},
			categoryAxis: {title: {visible: false}},
			tooltip: {visible: true},
			title: {visible: true, text: "" }
		});


},

 CreatePlanned : function() {	


		var url = "/XMII/Illuminator?QueryTemplate=SMT_TRAINING/Vignesh/TASKS/SQL_DropDown&Content-Type=text/json"
var productDetail;
		$.ajax({
			url: url,
			type: "POST",
			async : false,
			success: function (data, txt, jqXHR) {
				if(data.Rowsets.Rowset != undefined){
					productDetail = data.Rowsets.Rowset[0].Row
					var oModel = new sap.ui.model.json.JSONModel(productDetail);
					oDropController.getView().setModel(oModel);
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
			}
		});
		var oVizFrame = oDropController.getView().byId("hlannedAndActualVizFrame");
		oVizFrame.setVizType("line");
		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
			dimensions: [{
				name: "Id",
				value: "{Id}"
			}],
			measures: [{
				name: 'StreetNo',
				value: "{StreetNo}"
			},{
				name: 'Age',
				value: "{Age}"
			}],
			data: {
				path: "/"
			}
		});
		oVizFrame.setDataset(oDataset);

		var feedValueAxis0 = new sap.viz.ui5.controls.common.feeds.FeedItem({
			"uid": "valueAxis",
			"type": "Measure",
			"values": ["StreetNo"]
		}),
		feedValueAxis1 = new sap.viz.ui5.controls.common.feeds.FeedItem({
			"uid": "valueAxis",
			"type": "Measure",
			"values": ["Age"]
		}),
		feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
			"uid": "categoryAxis",
			"type": "Dimension",
			"values": ["Id"]
		});
		oVizFrame.addFeed(feedValueAxis0);
		oVizFrame.addFeed(feedValueAxis1);
		oVizFrame.addFeed(feedCategoryAxis);

		oVizFrame.setVizProperties({
			plotArea: {
					colorPalette: ['#CB4335','#FFC300'],
					dataLabel: {showTotal: true,visible:true,hideWhenOverlap:true},
					//dataShape: {primaryAxis: ["bar", "bar"]}
				   },
				   legend: {visible: true},
				   legendGroup: {
					   layout: { position: "top"}
				   },
			valueAxis: {label: { },title: {visible: false}},
			categoryAxis: {title: {visible: false}},
			tooltip: {visible: true},
			title: {visible: true, text: "" }
		});


},


 CreatePlanne : function() {	


		var url = "/XMII/Illuminator?QueryTemplate=SMT_TRAINING/Vignesh/TASKS/SQL_DropDown&Content-Type=text/json"
var productDetail;
		$.ajax({
			url: url,
			type: "POST",
			async : false,
			success: function (data, txt, jqXHR) {
				if(data.Rowsets.Rowset != undefined){
					productDetail = data.Rowsets.Rowset[0].Row
					var oModel = new sap.ui.model.json.JSONModel(productDetail);
					oDropController.getView().setModel(oModel);
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
			}
		});
		var oVizFrame = oDropController.getView().byId("idPhlannedAndActualVizFrame");
		oVizFrame.setVizType("column");
		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
			dimensions: [{
				name: "Id",
				value: "{Id}"
			}],
			measures: [{
				name: 'StreetNo',
				value: "{StreetNo}"
			},{
				name: 'Age',
				value: "{Age}"
			}],
			data: {
				path: "/"
			}
		});
		oVizFrame.setDataset(oDataset);

		var feedValueAxis0 = new sap.viz.ui5.controls.common.feeds.FeedItem({
			"uid": "valueAxis",
			"type": "Measure",
			"values": ["StreetNo"]
		}),
		feedValueAxis1 = new sap.viz.ui5.controls.common.feeds.FeedItem({
			"uid": "valueAxis",
			"type": "Measure",
			"values": ["Age"]
		}),
		feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
			"uid": "categoryAxis",
			"type": "Dimension",
			"values": ["Id"]
		});
		oVizFrame.addFeed(feedValueAxis0);
		oVizFrame.addFeed(feedValueAxis1);
		oVizFrame.addFeed(feedCategoryAxis);

		oVizFrame.setVizProperties({
			plotArea: {
					colorPalette: ['#33FF99','#FF9933'],
					dataLabel: {showTotal: true,visible:true,hideWhenOverlap:true},
					//dataShape: {primaryAxis: ["bar", "bar"]}
				   },
				   legend: {visible: true},
				   legendGroup: {
					   layout: { position: "top"}
				   },
			valueAxis: {label: { },title: {visible: false}},
			categoryAxis: {title: {visible: false}},
			tooltip: {visible: true},
			title: {visible: true, text: "" }
		});


},


 CreatePie : function() {	


		var url = "/XMII/Illuminator?QueryTemplate=SMT_TRAINING/Vignesh/TASKS/SQL_DropDown&Content-Type=text/json"
var productDetail;
		$.ajax({
			url: url,
			type: "POST",
			async : false,
			success: function (data, txt, jqXHR) {
				if(data.Rowsets.Rowset != undefined){
					productDetail = data.Rowsets.Rowset[0].Row
					var oModel = new sap.ui.model.json.JSONModel(productDetail);
					oDropController.getView().setModel(oModel);
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
			}
		});
		var oVizFrame = oDropController.getView().byId("PlannedAndActualVizFrame");
		oVizFrame.setVizType("pie");
var oDataset = new sap.viz.ui5.data.FlattenedDataset({
			dimensions : [{
			        name : 'Name',
				value : "{Name}"}],
			               
			measures : [{
				name : 'Age',
				value : '{Age}'} ],
			             
			data : {
				path : "/"
			}
		});
		oVizFrame.setDataset(oDataset);

		var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
			"uid": "size",
			"type": "Measure",
			"values": ["Age"]
		}),
		feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
			"uid": "color",
			"type": "Dimension",
			"values": ["Name"]
		});
		oVizFrame.addFeed(feedValueAxis);
		oVizFrame.addFeed(feedCategoryAxis);

		oVizFrame.setVizProperties({
			plotArea: {
					colorPalette: ['#748cb2','#9cc677'],
					dataLabel: {showTotal: true,visible:true,hideWhenOverlap:true},
					//dataShape: {primaryAxis: ["bar", "bar"]}
				   },
				   legend: {visible: true},
				   legendGroup: {
					   layout: { position: "bottom"}
				   },
			tooltip: {visible: true},
			title: {visible: true, text: "" }
		});
		
},
     
});
