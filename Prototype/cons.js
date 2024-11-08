function animal(size, type, color,)	
	{
		this.size=size;
		this.type=type;
		this.color=color;

		this.getSize=function(){document.write(this.size)};
	};

var abc = new animal('big', 'lion', 'yellow' );
abc.getSize();
