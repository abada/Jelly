#import "ApplicationMods.h"

@implementation ApplicationMods

+ (NSArray*) compiledMods
{
	NSMutableArray *modules = [NSMutableArray array];
	[modules addObject:[NSDictionary dictionaryWithObjectsAndKeys:@"ti.cloud",@"name",@"ti.cloud",@"moduleid",@"2.3.2",@"version",@"1056b5d2-2bb5-4339-b930-297637aeec4e",@"guid",@"",@"licensekey",nil]];
	[modules addObject:[NSDictionary dictionaryWithObjectsAndKeys:@"facebook",@"name",@"facebook",@"moduleid",@"3.1.1",@"version",@"da8acc57-8673-4692-9282-e3c1a21f5d83",@"guid",@"",@"licensekey",nil]];
	return modules;
}

@end