// GraphBartest component
var GraphBartest = React.createClass({
    name: 'graph-bartest',
    mixins: [getCommonMixin],
    
    // attribute definitions
    getAttributes: function() {
        var attributes = [
            { name:'name', type:'string', required:true, defaultValue:'', note:'field name' },
            { name:'dispatcher', type:'object', required:false, defaultValue:null, note:'flux dispatcher' },
            { name:'boxClass', type:'string', required:false, defaultValue:'', note:'container CSS class' },
            { name:'inputClass', type:'string', required:false, defaultValue:'form-control', note:'input element CSS class' },
            { name:'value', type:'string', required:false, defaultValue:'', note:'graph data input' }
        ];
        return attributes;
    },
    
    getValue: function() {
        return this.state.value;
    },
    
    onChange: function(event) {
        var newValue = event.target.value;
        this.setState({ value:newValue });
        this.fire('change', [newValue]);
    },
    
    render: function() {
        // set content display
        var content = 
            <div className={ "form-group html-input-content-container" } >
                <div>Barplot Test</div>
            </div>;
        return (
            <div className={ this.state.containerClassNames.join(' ') }  >
                { content }
            </div>
        );
    }
});
