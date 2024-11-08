function Animal(size, type, color,)	
	{
		this.size=size;
		this.type=type;
		this.color=color;

		this.getSize=function(){console.log(this.size)};
	};

var abc = new Animal('big', 'lion', 'yellow' );
abc.getSize();
